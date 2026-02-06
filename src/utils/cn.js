/**
 * Utility for conditionally joining class names
 * @param  {...(string | undefined | null | false)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
