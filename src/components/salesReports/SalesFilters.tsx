import React from 'react';
import { Box, TextField, Grid } from '@mui/material';

const SalesFilters: React.FC = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField 
            label="Fecha Inicial" 
            type="date" 
            fullWidth 
            variant="outlined" 
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField 
            label="Fecha Final" 
            type="date" 
            fullWidth 
            variant="outlined" 
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField 
            label="Producto" 
            fullWidth 
            variant="outlined" 
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SalesFilters;
