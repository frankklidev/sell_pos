import React from 'react';
import { Box, Typography } from '@mui/material';
import CurrencySettings from './CurrencySettings';
import TaxSettings from './TaxSettings';
import ThemeCustomization from './ThemeCustomization';


const AppSettings: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Configuración de la Aplicación</Typography>
      <CurrencySettings />
      <TaxSettings />
      <ThemeCustomization />
    </Box>
  );
};

export default AppSettings;
