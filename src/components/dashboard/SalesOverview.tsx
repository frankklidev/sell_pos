import React from 'react';
import { Paper, Typography } from '@mui/material';

const SalesOverview: React.FC = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6" component="h2">
        Resumen de Ventas
      </Typography>
      <Typography variant="body1">
        Ventas hoy: $1,200
      </Typography>
      <Typography variant="body1">
        Ventas esta semana: $8,500
      </Typography>
      <Typography variant="body1">
        Ventas este mes: $30,000
      </Typography>
    </Paper>
  );
};

export default SalesOverview;
