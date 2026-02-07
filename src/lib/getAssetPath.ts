/**
 * Helper function to get correct asset paths for both local and production deployments.
 * Accounts for GitHub Pages subdirectory (/portfolio/) when needed.
 */
export function getAssetPath(path: string): string {
  // Only add base path if we're in production and the path starts with /
  if (import.meta.env.PROD && path.startsWith('/')) {
    return `/portfolio${path}`;
  }
  return path;
}
