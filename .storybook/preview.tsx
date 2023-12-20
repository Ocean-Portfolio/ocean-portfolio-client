import '@/styles/global.css';
import '@/styles/theme/grayScale.css';
import '@/styles/storybook.css';
import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { defaultColorTheme } from '../src/styles/theme/default.css';
import React from 'react';

export const customViewports = {
  mobile360: {
    name: 'mobile360',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  mobile390: {
    name: 'mobile390',
    styles: {
      width: '390px',
      height: '640px',
    },
  },
  tablet: {
    name: 'tablet',
    styles: {
      width: '768px',
      height: '720px',
    },
  },
  laptop: {
    name: 'laptop',
    styles: {
      width: '1280px',
      height: '720px',
    },
  },
  FHD: {
    name: 'FHD',
    styles: {
      width: '1440px',
      height: '801px',
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...customViewports,
      },
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <div className={defaultColorTheme}>
        <Story />
      </div>
    );
  },
];

export default preview;
