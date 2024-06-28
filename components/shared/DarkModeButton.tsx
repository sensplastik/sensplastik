'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

export function DarkModeButton() {

  const { resolvedTheme, setTheme } = useTheme()

  const [mode, setMode] = useState('OFF');

  useEffect(() => {

    setMode(resolvedTheme =='light' ? 'OFF' : 'ON');

  }, [resolvedTheme]);
  
  return (
    <button onClick={() => setTheme(resolvedTheme =='light' ? 'dark': 'light')}>[{mode}]</button>
  )
}
