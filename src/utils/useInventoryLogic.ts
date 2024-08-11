import { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ProductRow } from '../types/Product';


export const useInventoryLogic = () => {
  const [rows, setRows] = useState<ProductRow[]>([
    {
      id: 1,
      unit: '',
      product: '',
      initial: 0,
      entries: 0,
      available: 0,
      used: 0,
      withdrawals: 0,
      forSale: 0,
      final: 0,
      sold: 0,
      pricePerUnit: 0,
      cost: 0,
    },
  ]);

  const handleInputChange = (
    id: number,
    field: keyof ProductRow,
    value: string | number
  ) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const addRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        id: prevRows.length + 1,
        unit: '',
        product: '',
        initial: 0,
        entries: 0,
        available: 0,
        used: 0,
        withdrawals: 0,
        forSale: 0,
        final: 0,
        sold: 0,
        pricePerUnit: 0,
        cost: 0,
      },
    ]);
  };

  const calculateRowValues = (row: ProductRow) => {
    return {
      ...row,
      available: row.initial + row.entries,
      forSale: row.available - row.used - row.withdrawals,
      final: row.forSale - row.sold,
    };
  };

  const calculateTotals = () => {
    const totals = rows.reduce(
      (acc, row) => {
        const updatedRow = calculateRowValues(row);
        acc.totalSold += updatedRow.sold * updatedRow.pricePerUnit;
        acc.totalCost += updatedRow.final * updatedRow.cost;
        return acc;
      },
      { totalSold: 0, totalCost: 0 }
    );
    return totals;
  };

  const exportToExcel = () => {
    const worksheetData = rows.map((row) => {
      const calculatedRow = calculateRowValues(row);
      return {
        Unidad: row.unit,
        Producto: row.product,
        "Al Inicio": row.initial,
        Entradas: row.entries,
        Disponibles: calculatedRow.available,
        "Comida Empleada": row.used,
        Retiros: row.withdrawals,
        "A la Venta": calculatedRow.forSale,
        Final: calculatedRow.final,
        Vendido: row.sold,
        "Precio Unidad": row.pricePerUnit,
        "Importe Vendido": (row.sold * row.pricePerUnit).toFixed(2),
        Costo: row.cost,
        "Importe Costo": (calculatedRow.final * row.cost).toFixed(2),
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Control de Inventario");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "Control_de_Inventario_IPV.xlsx");
  };

  const importFromExcel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, {
          header: 1,
        });

        const importedRows = jsonData.slice(1).map((row, index) => ({
          id: index + 1,
          unit: row[0] || "",
          product: row[1] || "",
          initial: row[2] || 0,
          entries: row[3] || 0,
          available: row[4] || 0,
          used: row[5] || 0,
          withdrawals: row[6] || 0,
          forSale: row[7] || 0,
          final: row[8] || 0,
          sold: row[9] || 0,
          pricePerUnit: row[10] || 0,
          cost: row[11] || 0,
        }));

        setRows(importedRows);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return {
    rows,
    handleInputChange,
    addRow,
    calculateRowValues,
    calculateTotals,
    exportToExcel,
    importFromExcel,
  };
};
