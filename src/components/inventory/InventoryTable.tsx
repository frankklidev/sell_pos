import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import { ProductRow } from '../../types/Product';


interface InventoryTableProps {
  rows: ProductRow[];
  handleInputChange: (id: number, field: keyof ProductRow, value: string | number) => void;
  calculateRowValues: (row: ProductRow) => ProductRow;
}

const InventoryTable: React.FC<InventoryTableProps> = ({ rows, handleInputChange, calculateRowValues }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Unidad</TableCell>
          <TableCell>Producto</TableCell>
          <TableCell>Al Inicio</TableCell>
          <TableCell>Entradas</TableCell>
          <TableCell>Disponibles</TableCell>
          <TableCell>Comida Empleada</TableCell>
          <TableCell>Retiros</TableCell>
          <TableCell>A la Venta</TableCell>
          <TableCell>Final</TableCell>
          <TableCell>Vendido</TableCell>
          <TableCell>Precio Unidad</TableCell>
          <TableCell>Importe Vendido</TableCell>
          <TableCell>Costo</TableCell>
          <TableCell>Importe Costo</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => {
          const calculatedRow = calculateRowValues(row);
          return (
            <TableRow key={row.id}>
              <TableCell>
                <TextField
                  value={row.unit}
                  onChange={(e) => handleInputChange(row.id, "unit", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={row.product}
                  onChange={(e) => handleInputChange(row.id, "product", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={row.initial}
                  onChange={(e) => handleInputChange(row.id, "initial", parseInt(e.target.value))}
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={row.entries}
                  onChange={(e) => handleInputChange(row.id, "entries", parseInt(e.target.value))}
                />
              </TableCell>
              <TableCell>{calculatedRow.available}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={row.used}
                  onChange={(e) => handleInputChange(row.id, "used", parseInt(e.target.value))}
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={row.withdrawals}
                  onChange={(e) => handleInputChange(row.id, "withdrawals", parseInt(e.target.value))}
                />
              </TableCell>
              <TableCell>{calculatedRow.forSale}</TableCell>
              <TableCell>{calculatedRow.final}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={row.sold}
                  onChange={(e) => handleInputChange(row.id, "sold", parseInt(e.target.value))}
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={row.pricePerUnit}
                  onChange={(e) => handleInputChange(row.id, "pricePerUnit", parseFloat(e.target.value))}
                />
              </TableCell>
              <TableCell>{(row.sold * row.pricePerUnit).toFixed(2)}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={row.cost}
                  onChange={(e) => handleInputChange(row.id, "cost", parseFloat(e.target.value))}
                />
              </TableCell>
              <TableCell>{(row.final * row.cost).toFixed(2)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default InventoryTable;
