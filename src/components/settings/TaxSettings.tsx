import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

const TaxSettings: React.FC = () => {
  const [taxRate, setTaxRate] = useState(16); // Ejemplo: 16% de impuesto

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaxRate(Number(event.target.value));
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Configuración de Impuestos</Typography>
      <TextField
        label="Tasa de Impuesto (%)"
        value={taxRate}
        onChange={handleChange}
        type="number"
        fullWidth
        variant="outlined"
      />
    </Box>
  );
};

export default TaxSettings;
