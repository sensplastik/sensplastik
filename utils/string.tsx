import path from 'path'

// Get slug from current dir
export  function resolveFolderSlug (): string {
    return  toKebabCase(__dirname.split(path.sep).pop() || '')
}

// Function to convert string to kebab-case
export  function toKebabCase  (str: string):string {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')  // Replace non-alphanumeric characters with hyphens
      .replace(/(^-|-$)/g, '');     // Remove leading and trailing hyphens
  };
  