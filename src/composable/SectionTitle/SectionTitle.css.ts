import { style } from '@vanilla-extract/css';
import { ODSBreakpointTokenVariables } from '@/const/breakpoints';
import { ODSTextTokenVariables } from '@/const/fonts';
import { colorVariants } from '@/styles/common/color.css';
import { fontVariants } from '@/styles/common/font.css';

export const sectionTitleStyle = style([
  fontVariants['title-l-bold'],
  colorVariants['gray-scale-00'],
  {
    '@media': {
      [ODSBreakpointTokenVariables['breakpoint-l']]:
        ODSTextTokenVariables['title-m-bold'],
    },
  },
]);
