/**
 * Environment configuration
 * Access env variables through this module for type safety and defaults
 */

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'App';
export const IS_DEV = import.meta.env.DEV;
export const IS_PROD = import.meta.env.PROD;
