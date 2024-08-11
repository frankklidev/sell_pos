import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const SalesChart: React.FC = () => {
  const chartData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Ventas',
        data: [500, 1000, 1500, 2000, 2500, 3000],
        fill: false,
        borderColor: 'blue',
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default SalesChart;
