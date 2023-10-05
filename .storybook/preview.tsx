import type { Preview } from '@storybook/react';
import React from 'react';
import '@/styles/global.css';
import '@/styles/theme.css';
import '@/styles/font.css';
import '@/styles/storybook.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

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
  desktop: {
    name: 'desktop',
    styles: {
      width: '900px',
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
    return <Story />;
  },
];

export default preview;
