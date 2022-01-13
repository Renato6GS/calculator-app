import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { readdirSync } from 'fs';

const absolutePathAliases = {};
const srcPath = path.resolve('./src/');
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map((dirent) =>
  dirent.name.replace(/(\.(ts|js|jsx|css)){1}(x?)/, '')
);

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = path.join(srcPath, directory);
});

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...absolutePathAliases,
    },
  },
});
