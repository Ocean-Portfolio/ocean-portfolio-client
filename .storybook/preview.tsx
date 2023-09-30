import type { Preview } from '@storybook/react';
import React from 'react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { getCssText } from '../stitches.config';

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
  withThemeFromJSXProvider({
    defaultTheme: getCssText(),
  }),
  (Story) => {
    return <Story />;
  },
];

export default preview;
