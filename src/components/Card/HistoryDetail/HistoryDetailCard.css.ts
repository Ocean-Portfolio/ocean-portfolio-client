import { style, styleVariants } from '@vanilla-extract/css';

const wrapStyle = style({
  display: 'flex',
  flexDirection: 'column',
  backdropFilter: 'blur(8px)',
});

export const wrapVariants = styleVariants({
  LARGE: [
    wrapStyle,
    {
      borderRadius: '1rem',
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      padding: '1.25rem 1.375rem',
    },
  ],
  SMALL: [
    wrapStyle,
    {
      borderRadius: '0.5rem',
      backgroundColor: 'rgba(248, 252, 253, 0.75)',
      padding: '0.6875rem 0.75rem',
    },
  ],
});

export const sizeVariants = styleVariants({
  LARGE: {
    width: '40.25rem',
    maxWidth: '40.25rem',
  },
  SMALL: {
    width: '20rem',
  },
});

export const gapVariants = styleVariants({
  LARGE: {
    gap: '2.5rem',
  },
  SMALL: {
    // gap: '1.25rem',
  },
});

export const titleVariants = styleVariants({
  LARGE: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  SMALL: {
    // 디자인 필요
  },
});

// description 관련하여, 세부 디자인이 필요함
// li 일 경우
// span 일 경우
// p 일 경우
// strong 일 경우
// 문단이 나뉠 경우는 어떻게 판단하고 디자인할지??
