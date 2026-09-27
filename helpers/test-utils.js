import { createReadStream } from 'fs';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Load test data from fixtures/data/*.json
 * @param {string} filename - e.g. 'users'
 */
export async function loadTestData(filename) {
  const filePath = path.resolve(__dirname, `../fixtures/data/${filename}.json`);
  const content = await readFile(filePath, 'utf-8');
  return JSON.parse(content);
}

/**
 * Generate a random string (useful for unique test data)
 * @param {number} length
 */
export function randomString(length = 8) {
  return Math.random().toString(36).substring(2, 2 + length);
}

/**
 * Generate a random email address
 * @param {string} domain
 */
export function randomEmail(domain = 'test.com') {
  return `user_${randomString(6)}@${domain}`;
}

/**
 * Wait for a given number of milliseconds
 * @param {number} ms
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Format a date to YYYY-MM-DD string
 * @param {Date} date
 */
export function formatDate(date = new Date()) {
  return date.toISOString().split('T')[0];
}
