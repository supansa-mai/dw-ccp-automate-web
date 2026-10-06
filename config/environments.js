/**
 * Environment configuration
 * Usage: ENV=staging npx playwright test
 *        ENV=production npx playwright test
 */

const environments = {
  uat: {
    baseURL: 'https://uat.fc-creator.datawow.io/th',
    apiURL: 'https://api-uat.fc-creator.datawow.io/v1',
    timeout: 30000,
  },
  sit: {
    baseURL: 'https://sit.fc-creator.datawow.io/th',
    apiURL: 'https://api-sit.fc-creator.datawow.io/v1',
    timeout: 60000,
  },
  local: {
    baseURL: 'http://localhost:3000',
    apiURL: 'http://localhost:8080',
    timeout: 15000,
  },
};

const currentEnv = process.env.ENV || 'uat';

if (!environments[currentEnv]) {
  throw new Error(`Unknown environment: "${currentEnv}". Valid options: ${Object.keys(environments).join(', ')}`);
}

export const env = environments[currentEnv];
export const ENV_NAME = currentEnv;
