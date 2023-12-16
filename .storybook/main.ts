import type { StorybookConfig } from '@storybook/nextjs';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { DefinePlugin } from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL as string,
    NEXT_PUBLIC_LOCALHOST: process.env.NEXT_PUBLIC_LOCALHOST as string,
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH as string,
    NEXT_PUBLIC_STORAGE_URL: process.env.NEXT_PUBLIC_STORAGE_URL as string,
    NEXT_PUBIC_WEBSOCKET_PORT: process.env.NEXT_PUBIC_WEBSOCKET_PORT as string,
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: [path.join(__dirname, '../public')],
  features: {
    experimentalNextRSC: true,
  },
  webpackFinal: async (config) => {
    if (config.resolve && config.resolve.alias) {
      config.resolve.alias['@'] = path.resolve(__dirname, '../src/');
    }

    config.plugins?.push(
      new VanillaExtractPlugin(),
      new MiniCssExtractPlugin(),
      new DefinePlugin({
        'process.env.STORYBOOK': JSON.stringify(true),
      }),
    );

    config.module?.rules?.forEach((rule) => {
      if (
        typeof rule !== 'string' &&
        // @ts-ignore
        rule.test instanceof RegExp &&
        // @ts-ignore
        rule.test.test('test.css')
      ) {
        // @ts-ignore
        rule.exclude = /\.vanilla\.css$/i;
      }
    });

    config.module?.rules?.push({
      test: /\.vanilla\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: require.resolve('css-loader'),
          options: {
            url: false,
          },
        },
      ],
    });

    return config;
  },
};
export default config;
