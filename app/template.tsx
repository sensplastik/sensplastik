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
 * @returns {JSX.Element} The `Template` component with the applied theme and children.
 */
export default function Template({ children }: { children: React.ReactNode }): JSX.Element {
  // Get the current path name from Next.js navigation
  const pathname = usePathname();

  // Define the themes for specific pages
  const pageThemes = [
    { path: '/contact', theme: 'light' },
   // { path: '/projects/*', theme: 'light' },
  ];

  /**
   * Function to match path patterns.
   *
   * This function checks if the current pathname matches the given pattern. It handles exact matches
   * and patterns ending with '/*' to match any subpaths.
   *
   * @param {string} pattern - The path pattern to match against.
   * @param {string} pathname - The current pathname.
   * @returns {boolean} True if the pattern matches the pathname, otherwise false.
   */
  const matchPath = (pattern: string, pathname: string): boolean => {
    if (pattern === pathname) return true;
    if (pattern.endsWith('/*')) {
      const basePattern = pattern.slice(0, -2);
      return pathname.startsWith(basePattern);
    }
    return false;
  };

  // Find the theme that matches the current path name
  const matchedTheme = pageThemes.find((page) => matchPath(page.path, pathname))?.theme;

  /*useEffect(() => {
    if (!pathname.startsWith('/projects/')){
     ScrollTrigger.getById('navbar-project-scroll-trigger')?.kill()
    }
  }, [pathname])*/


  return (
    // Provide the matched theme to the ThemeProvider
    <ThemeProvider forcedTheme={matchedTheme}>
      {children}
    </ThemeProvider>
  );
}
