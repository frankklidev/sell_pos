import React, { createContext, useState } from 'react';

interface SettingsContextProps {
  currency: string;
  taxRate: number;
  setCurrency: (currency: string) => void;
  setTaxRate: (taxRate: number) => void;
}

export const SettingsContext = createContext<SettingsContextProps>({
  currency: 'USD',
  taxRate: 16,
  setCurrency: () => {},
  setTaxRate: () => {},
});

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [taxRate, setTaxRate] = useState(16);

  return (
    <SettingsContext.Provider value={{ currency, taxRate, setCurrency, setTaxRate }}>
      {children}
    </SettingsContext.Provider>
  );
};
