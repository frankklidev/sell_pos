import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductPage from './pages/ProductPage';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/themes/theme';

import PrivateRoute from './components/auth/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import InventoryControlForm from './components/inventory/InventoryControlForm';
import SalesHistory from './components/sales/SalesHistory';
import Pos from './components/sales/Pos';
import CategoryPage from './pages/CategoryPage';
import SalesReportsPage from './pages/SalesReportsPage';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/products"
              element={
                <PrivateRoute>
                  <ProductPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/inventory-control"
              element={
                <PrivateRoute>
                  <InventoryControlForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/sales-history"
              element={
                <PrivateRoute>
                  <SalesHistory />
                </PrivateRoute>
              }
            />
            <Route
              path="/pos"
              element={
                <PrivateRoute>
                  <Pos />
                </PrivateRoute>
              }
            />
            <Route
              path="/categories"
              element={
                <PrivateRoute>
                  <CategoryPage />
                </PrivateRoute>
              }
            />
           <Route
              path="/sales-reports"
              element={
                <PrivateRoute>
                  <SalesReportsPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
