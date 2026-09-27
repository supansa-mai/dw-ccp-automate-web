/**
 * Environment configuration
 * Usage: ENV=staging npx playwright test
 *        ENV=production npx playwright test
 */

const environments = {
  staging: {
    baseURL: 'https://staging.example.com',
    apiURL: 'https://api.staging.example.com',
    timeout: 30000,
  },
  production: {
    baseURL: 'https://www.example.com',
    apiURL: 'https://api.example.com',
    timeout: 60000,
  },
  local: {
    baseURL: 'http://localhost:3000',
    apiURL: 'http://localhost:8080',
    timeout: 15000,
  },
};

const currentEnv = process.env.ENV || 'staging';

if (!environments[currentEnv]) {
  throw new Error(`Unknown environment: "${currentEnv}". Valid options: ${Object.keys(environments).join(', ')}`);
}

export const env = environments[currentEnv];
export const ENV_NAME = currentEnv;
