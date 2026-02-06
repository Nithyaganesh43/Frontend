import axios from 'axios';
import { API_BASE_URL } from '@/config/env';

/**
 * Axios instance with default configuration
 */
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Response interceptor for error handling
 */
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error.response?.data?.message || error.message || 'Request failed';
    const status = error.response?.status || 0;
    return Promise.reject(new ApiError(status, message));
  },
);

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}
