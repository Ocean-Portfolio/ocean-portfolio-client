import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/global.css';
import '@/styles/theme/grayScale.css';
import '@/styles/theme/colorPalette.css';
import '@/styles/storybook.css';
import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { defaultColorTheme } from '../src/styles/theme/default.css';
import React from 'react';
import { ApolloWrapper } from '../src/apollo/apollo-wrapper';
import { StaticContextUserAgent } from '../src/Provider/StaticContextUserAgent.context';
import { UAParser } from 'ua-parser-js';

export const customViewports = {
  'container-s': {
    name: 'container-s',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  'container-m': {
    name: 'container-m',
    styles: {
      width: '768px',
      height: '720px',
    },
  },
  'container-l': {
    name: 'container-l',
    styles: {
      width: '940px',
      height: '720px',
    },
  },
  'container-xl': {
    name: 'container-xl',
    styles: {
      width: '1280px',
      height: '720px',
    },
  },
  'container-xxl': {
    name: 'container-xxl',
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
    const ua = new UAParser(window.navigator.userAgent).getResult();
    return (
      <ApolloWrapper>
        <StaticContextUserAgent.Provider value={ua}>
          <div className={defaultColorTheme}>
            <Story />
          </div>
        </StaticContextUserAgent.Provider>
      </ApolloWrapper>
    );
  },
];

export default preview;
