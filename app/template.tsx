"use client";

// Import necessary hooks and components
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';

/**
 * Template component that sets the theme for the application based on the current path.
 *
 * This component uses the `ThemeProvider` from `next-themes` to apply a specific theme 
 * based on the current route. The theme is determined using a predefined list of themes 
 * associated with specific paths.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components to be rendered inside the `ThemeProvider`.
 * @returns {JSX.Element} The `ThemeProvider` component with the applied theme and children.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  // Get the current path name from Next.js navigation
  const pathname = usePathname();

  // Define the themes for specific pages
  const pageThemes = [
    { path: '/contact', theme: 'light' },
    { path: '/work', theme: 'dark' },
  ];

  // Find the theme that matches the current path name
  const matchedTheme = pageThemes.find((page) => page.path === pathname)?.theme;

  return (
    // Provide the matched theme to the ThemeProvider
    <ThemeProvider forcedTheme={matchedTheme}>
      {children}
    </ThemeProvider>
  );
}
