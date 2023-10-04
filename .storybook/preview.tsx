import type { Preview } from '@storybook/react';
import React from 'react';
import '@/styles/global.css';
import '@/styles/theme.css';
import '@/styles/font.css';
import '@/styles/storybook.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
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
