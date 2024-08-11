// src/pages/Dashboard.tsx
import React from 'react';
import { Grid, Typography } from '@mui/material';
import SalesOverview from '../components/dashboard/SalesOverview';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import RecentOrders from '../components/dashboard/RecentOrders';
import QuickActions from '../components/dashboard/QuickActions';
import MainLayout from '../layout/MainLayout';


const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        {/* Contenido del Dashboard */}
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            Dashboard
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <SalesOverview />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <PerformanceChart />
        </Grid>

        <Grid item xs={12}>
          <RecentOrders />
        </Grid>

        <Grid item xs={12}>
          <QuickActions />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Dashboard;
