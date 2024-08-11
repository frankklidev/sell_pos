import React from "react";
import { Box, Typography, Paper, Grid, TextField } from "@mui/material";

import InventoryTable from "./InventoryTable";
import InventoryActions from "./InventoryActions";
import { useInventoryLogic } from "../../utils/useInventoryLogic";
import MainLayout from "../../layout/MainLayout";

const InventoryControlForm: React.FC = () => {
  const {
    rows,
    handleInputChange,
    addRow,
    calculateRowValues,
    calculateTotals,
    exportToExcel,
    importFromExcel,
  } = useInventoryLogic();

  const { totalSold, totalCost } = calculateTotals();

  return (
    <MainLayout>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Control de Inventario a Precio de Venta (IPV)
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <TextField fullWidth label="Unidad" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Empresa" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Departamento" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Turno de" variant="outlined" />
          </Grid>
        </Grid>
        <InventoryTable
          rows={rows}
          handleInputChange={handleInputChange}
          calculateRowValues={calculateRowValues}
        />
        <InventoryActions
          addRow={addRow}
          exportToExcel={exportToExcel}
          importFromExcel={importFromExcel}
        />
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Resumen</Typography>
          <Typography>Total Importe Vendido: {totalSold.toFixed(2)}</Typography>
          <Typography>Total Importe Costo: {totalCost.toFixed(2)}</Typography>
        </Box>
      </Paper>
    </MainLayout>
  );
};

export default InventoryControlForm;
