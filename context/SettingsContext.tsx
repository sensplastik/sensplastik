"use client"
import { createContext, ReactNode,useContext } from 'react';

import type { SettingsPayload } from '@/types';

interface SettingsContextType {
  settings: SettingsPayload | null;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children, settings }: { children: ReactNode; settings: SettingsPayload }) => {
  return (
    <SettingsContext.Provider value={{ settings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
