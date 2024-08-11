import React from 'react';
import { Box, Typography } from '@mui/material';

const SalesStats: React.FC = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6">Estadísticas de Ventas</Typography>
      <Typography>Total de Ventas: $15,000</Typography>
      <Typography>Ventas Promedio por Mes: $2,500</Typography>
      <Typography>Producto Más Vendido: Laptop</Typography>
    </Box>
  );
};

export default SalesStats;
