import { createStitches } from '@stitches/react';
import { ODSColorTokenVariables } from '@/const/colors';
import suit from '@/suit';

export const { getCssText, createTheme, globalCss, css, styled } =
  createStitches({
    theme: {
      colors: ODSColorTokenVariables,
      fonts: {
        suit: `${suit.style.fontFamily}, SUIT Variable`,
      },
    },
    utils: {
      autoFlowRows: (value?: AutoFlowProp) => {
        if (value) {
          return {
            gridAutoFlow: 'row',
            gridAutoRows: typeof value === 'string' ? value : '',
          };
        }

        return {};
      },
      autoFlowColumns: (value?: AutoFlowProp) => {
        if (value) {
          return {
            gridAutoFlow: 'column',
            gridAutoColumns: typeof value === 'string' ? value : '',
          };
        }

        return {};
      },
      autoRows: (value?: string) => ({
        gridAutoRows: value,
      }),
      autoColumns: (value?: string) => ({
        gridAutoColumns: value,
      }),
      templateRows: (value?: string) => ({
        gridTemplateRows: value,
      }),
      templateColumns: (value?: string) => ({
        gridTemplateColumns: value,
      }),
    },
  });
