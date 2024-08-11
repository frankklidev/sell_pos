
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const MainContent = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  height: '100vh',
});

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutContainer>
      <CssBaseline />
      <Sidebar />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Header />
        <MainContent>
          {children}
        </MainContent>
      </Box>
    </LayoutContainer>
  );
};

export default MainLayout;
