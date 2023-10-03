import type { Preview } from '@storybook/react';
import React from 'react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { getCssText } from '../stitches.config';
import { fontGlobalStyles } from '../src/styles/font.style';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      typeset: {
        exclude: ['style', 'css', 'className', 'as', 'ref'],
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    defaultTheme: `${getCssText()} ${fontGlobalStyles()}`,
  }),
  (Story) => {
    return <Story />;
  },
];

export default preview;
