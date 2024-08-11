import React, { useState } from 'react';
import { Box, TextField, MenuItem, Grid } from '@mui/material';

interface Currency {
  code: string;
  name: string;
  value: number;
}

const CurrencySettings: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([
    { code: 'USD', name: 'Dólar Estadounidense', value: 1.0 },
    { code: 'EUR', name: 'Euro', value: 0.85 },
    { code: 'MXN', name: 'Peso Mexicano', value: 20.0 },
    { code: 'CUP', name: 'Peso Cubano', value: 25.0 }, // Añadido el CUP
    // Agregar más monedas según sea necesario
  ]);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0]);

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCode = event.target.value;
    const currency = currencies.find(c => c.code === selectedCode);
    if (currency) {
      setSelectedCurrency(currency);
    }
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setSelectedCurrency(prevCurrency => ({
      ...prevCurrency,
      value: isNaN(newValue) ? prevCurrency.value : newValue,
    }));

    setCurrencies(prevCurrencies =>
      prevCurrencies.map(currency =>
        currency.code === selectedCurrency.code ? { ...currency, value: newValue } : currency
      )
    );
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            select
            label="Moneda"
            value={selectedCurrency.code}
            onChange={handleCurrencyChange}
            fullWidth
            variant="outlined"
          >
            {currencies.map(currency => (
              <MenuItem key={currency.code} value={currency.code}>
                {currency.name} ({currency.code})
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={`Valor de ${selectedCurrency.code}`}
            value={selectedCurrency.value}
            onChange={handleValueChange}
            type="number"
            fullWidth
            variant="outlined"
            inputProps={{ step: "0.01", min: "0" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CurrencySettings;
