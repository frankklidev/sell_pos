import React from 'react';
import { Paper, Button, Grid } from '@mui/material';
import { AddShoppingCart, Receipt, Store } from '@mui/icons-material';

const QuickActions: React.FC = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" startIcon={<AddShoppingCart />}>
            Nueva Venta
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" startIcon={<Receipt />}>
            Generar Reporte
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" startIcon={<Store />}>
            Ver Inventario
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default QuickActions;
