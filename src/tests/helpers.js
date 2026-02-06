/**
 * Test utilities and setup
 * Add test helpers, mocks, and fixtures here
 */

// Example test helper
export function createMockUser(overrides = {}) {
  return {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
    ...overrides,
  };
}
