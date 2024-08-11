import React from 'react';
import MainLayout from '../layout/MainLayout';
import SalesReport from '../components/salesReports/SalesReport';

const SalesReportsPage: React.FC = () => {
  return (
    <MainLayout>
      <SalesReport />
    </MainLayout>
  );
};

export default SalesReportsPage;
