'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

export function DarkModeButton() {

  const { theme, setTheme } = useTheme()

  const [mode, setMode] = useState('OFF');

  useEffect(() => {

    setMode(theme =='light' ? 'OFF' : 'ON');

  }, [theme]);
  
  return (
    <button onClick={() => setTheme(theme =='light' ? 'dark': 'light')}>[{mode}]</button>
  )
}
