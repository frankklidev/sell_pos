import React, { useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeCustomization: React.FC = () => {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Personalización de Temas</Typography>
      <Button variant="contained" color="primary" onClick={() => changeTheme('light')}>
        Tema Claro
      </Button>
      <Button variant="contained" color="secondary" sx={{ ml: 2 }} onClick={() => changeTheme('dark')}>
        Tema Oscuro
      </Button>
    </Box>
  );
};

export default ThemeCustomization;
