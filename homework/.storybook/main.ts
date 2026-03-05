import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import type { StorybookConfig } from '@storybook/nextjs-vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../src/app/toss-stock-2/_components/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-onboarding',
  ],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
  viteFinal(config) {
    config.plugins = config.plugins ?? [];
    config.plugins.push(vanillaExtractPlugin());

    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, '../src'),
    };

    return config;
  },
};

export default config;
