import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, ListAlt, Assessment, PointOfSale, History, BarChart, Settings, Palette } from '@mui/icons-material'; 
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button component={Link} to="/products">
          <ListItemIcon><ListAlt /></ListItemIcon>
          <ListItemText primary="Productos" />
        </ListItem>
        <ListItem button component={Link} to="/inventory-control">
          <ListItemIcon><Assessment /></ListItemIcon>
          <ListItemText primary="Control de Inventario (IPV)" />
        </ListItem>
        <ListItem button component={Link} to="/pos">
          <ListItemIcon><PointOfSale /></ListItemIcon>
          <ListItemText primary="Punto de Venta (POS)" />
        </ListItem>
        <ListItem button component={Link} to="/sales-history">
          <ListItemIcon><History /></ListItemIcon>
          <ListItemText primary="Historial de Ventas" />
        </ListItem>
        <ListItem button component={Link} to="/sales-reports">
          <ListItemIcon><BarChart /></ListItemIcon>
          <ListItemText primary="Reportes de Ventas" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon><Settings /></ListItemIcon>
          <ListItemText primary="Configuración" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon><Palette /></ListItemIcon>
          <ListItemText primary="Personalización de Temas" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
