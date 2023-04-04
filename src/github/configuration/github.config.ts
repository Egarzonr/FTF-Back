import { config } from 'dotenv';

config();
export const GITHUB_CONFIG = {
  baseUrl: process.env.GITHUB_BASE_URL,
  token: process.env.GITHUB_ACCESS_TOKEN,
  owner: process.env.GITHUB_OWNER,
  repo: process.env.GITHUB_REPO,
};
