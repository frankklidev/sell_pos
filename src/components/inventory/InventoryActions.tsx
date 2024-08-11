import React from 'react';
import { Box, Button } from '@mui/material';
import { InventoryActionsProps } from '../../types/inventory';



const InventoryActions: React.FC<InventoryActionsProps> = ({ addRow, exportToExcel, importFromExcel }) => {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
      <Button variant="contained" color="primary" onClick={addRow}>
        Añadir Producto
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "green",
          "&:hover": { backgroundColor: "darkgreen" },
        }}
        onClick={exportToExcel}
      >
        Exportar a Excel
      </Button>
      <Button
        variant="contained"
        component="label"
        sx={{
          backgroundColor: "blue",
          "&:hover": { backgroundColor: "darkblue" },
        }}
      >
        Importar de Excel
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={importFromExcel}
          style={{ display: "none" }}
        />
      </Button>
    </Box>
  );
};

export default InventoryActions;
