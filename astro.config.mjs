// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const SERVER_PORT = 1234;
const LOCALHOST_URL = 'https://localhost:${SERVER_PORT}';
const LIVE_URL = 'https://LucaM56.github.io';

const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;

if (isBuild) {
  BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
  site: BASE_URL,
  vite: {
    plugins: [tailwindcss()]
  }
});