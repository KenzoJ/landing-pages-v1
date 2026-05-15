import { defineConfig } from 'vitest/config';
import path from 'path';

const themeDir = path.resolve('./src/theme/landing-page-theme');

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/*.test.{ts,tsx}'],
  },
  resolve: {
    alias: {
      react: path.resolve(themeDir, 'node_modules/react'),
      'react-dom': path.resolve(themeDir, 'node_modules/react-dom'),
      '@testing-library/jest-dom': path.resolve(
        themeDir,
        'node_modules/@testing-library/jest-dom'
      ),
      '@testing-library/react': path.resolve(
        themeDir,
        'node_modules/@testing-library/react'
      ),
    },
  },
});
