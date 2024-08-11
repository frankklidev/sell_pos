import React from 'react';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const RecentOrders: React.FC = () => {
  const orders = [
    { id: 1, date: '2024-08-09', customer: 'Juan Pérez', total: '$150' },
    { id: 2, date: '2024-08-09', customer: 'Ana Gómez', total: '$200' },
    { id: 3, date: '2024-08-08', customer: 'Carlos Sánchez', total: '$350' },
  ];

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6" component="h2">
        Pedidos Recientes
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default RecentOrders;
