import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PerformanceChart: React.FC = () => {
  const data = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Ventas',
        data: [1200, 2100, 1800, 2200, 2000, 2500, 2700],
        fill: false,
        borderColor: '#1976d2',
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default PerformanceChart;
