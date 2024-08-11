import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { Sale } from '../../types/sales';
import MainLayout from '../../layout/MainLayout';

Chart.register(...registerables);
dayjs.extend(isBetween);

const SalesHistory: React.FC = () => {
  const [sales, setSales] = useState<Sale[]>([
    { id: '1', date: '2024-08-01', customer: 'Juan Perez', total: 150 },
    { id: '2', date: '2024-08-02', customer: 'Maria Gomez', total: 200 },
    // Agrega más ventas según sea necesario
  ]);
  const [viewType, setViewType] = useState<'day' | 'week' | 'month'>('day');

  const getStartOfPeriod = () => {
    if (viewType === 'day') return dayjs().startOf('day');
    if (viewType === 'week') return dayjs().startOf('week');
    if (viewType === 'month') return dayjs().startOf('month');
    return dayjs();
  };

  const filteredSales = sales.filter((sale) => {
    const saleDate = dayjs(sale.date);
    const startOfPeriod = getStartOfPeriod();
    const endOfPeriod = startOfPeriod.add(1, viewType).subtract(1, 'second');

    return saleDate.isBetween(startOfPeriod, endOfPeriod, null, '[]');
  });

  const salesData = filteredSales.reduce((acc, sale) => {
    const date = dayjs(sale.date).format(viewType === 'day' ? 'HH:mm' : 'YYYY-MM-DD');
    if (!acc[date]) acc[date] = 0;
    acc[date] += sale.total;
    return acc;
  }, {} as { [key: string]: number });

  const chartData = {
    labels: Object.keys(salesData),
    datasets: [
      {
        label: 'Ventas',
        data: Object.values(salesData),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgba(53, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const addSale = () => {
    const newSale: Sale = {
      id: (sales.length + 1).toString(),
      date: dayjs().format('YYYY-MM-DD'),
      customer: 'Pedro Lopez',
      total: 250,
    };
    setSales([...sales, newSale]);
  };

  return (
    <MainLayout>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Historial de Ventas</Typography>

        <ToggleButtonGroup
          value={viewType}
          exclusive
          onChange={(_e, newViewType) => setViewType(newViewType)}
          aria-label="view type"
          sx={{ mb: 2 }}
        >
          <ToggleButton value="day">Día</ToggleButton>
          <ToggleButton value="week">Semana</ToggleButton>
          <ToggleButton value="month">Mes</ToggleButton>
        </ToggleButtonGroup>

        <Bar data={chartData} />

        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" onClick={addSale}>
            Agregar Venta Ejemplo
          </Button>
        </Box>
      </Paper>
    </MainLayout>
  );
};

export default SalesHistory;
