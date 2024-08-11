import React from 'react';
import MainLayout from '../layout/MainLayout';
import AppSettings from '../components/settings/AppSettings';

const SettingsPage: React.FC = () => {
  return (
    <MainLayout>
      <AppSettings />
    </MainLayout>
  );
};

export default SettingsPage;
