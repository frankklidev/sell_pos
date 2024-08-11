import React from 'react';
import {Typography, Paper } from '@mui/material';
import SalesChart from './SalesChart';
import SalesStats from './SalesStats';
import SalesFilters from './SalesFilters';

const SalesReport: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Reporte de Ventas</Typography>
      <SalesFilters />
      <SalesChart />
      <SalesStats />
    </Paper>
  );
};

export default SalesReport;
