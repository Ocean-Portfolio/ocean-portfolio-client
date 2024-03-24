import { style, styleVariants } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { colorVariants } from '@/styles/common/color.css';

export const titleStyle = style([
  colorVariants['gray-scale-00'],
  {
    ...ODSTextTokenVariables['title-l-bold'],

    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-m']]: {
        ...ODSTextTokenVariables['title-m-bold'],
      },
    },
  },
]);
