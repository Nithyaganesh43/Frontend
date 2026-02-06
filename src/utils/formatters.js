/**
 * Common formatting utilities
 */

/**
 * Format a date to a readable string
 * @param {Date | string | number} date
 * @param {Intl.DateTimeFormatOptions} [options]
 * @returns {string}
 */
export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  };
  return new Intl.DateTimeFormat('en-US', defaultOptions).format(
    new Date(date),
  );
}

/**
 * Format a number as currency
 * @param {number} amount
 * @param {string} [currency='USD']
 * @returns {string}
 */
export function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Truncate text with ellipsis
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
