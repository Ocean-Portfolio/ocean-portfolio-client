import { style } from '@vanilla-extract/css';
import { ODSTextTokenVariables } from '@/const/fonts';
import { flexCenter } from '@/styles/common/flex.css';

export const wrapStyle = style([
  flexCenter,
  {
    flexDirection: 'column',
    gap: '2rem',
    width: '100%',
    minHeight: ['100vh', '100svh'],
    '@media': {
      'screen and (max-width: 700px)': {
        paddingTop: '3rem !important',
        paddingBottom: '3rem !important',
      },
    },
  },
]);

export const titleStyle = style({
  paddingBottom: '6rem',

  ...ODSTextTokenVariables['display-l-bold'],

  '@media': {
    'screen and (max-width: 810px)': ODSTextTokenVariables['title-l-bold'],
    'screen and (max-width: 700px)': ODSTextTokenVariables['title-m-bold'],
  },
});

export const captionStyle = style({
  ...ODSTextTokenVariables['display-m-bold'],

  '@media': {
    'screen and (max-width: 810px)': ODSTextTokenVariables['title-m-bold'],
    'screen and (max-width: 700px)': ODSTextTokenVariables['title-s-medium'],
  },
});

export const profileListStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 12.5rem)',
  gridTemplateRows: 'auto',
  justifyItems: 'center',
  alignItems: 'center',
  gap: '3rem',
  padding: '3.5rem',
  borderRadius: '2rem',

  '@media': {
    'screen and (max-width: 810px)': {
      padding: '1.5rem',
      gap: '1.5rem',
    },
    'screen and (max-width: 700px)': {
      gridTemplateColumns: 'repeat(1, 12.5rem)',
    },
  },
});

export const gridStyle = style({});
