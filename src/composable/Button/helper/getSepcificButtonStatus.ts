import { buttonStatusVariants } from '../Button.css';

export const getSpecificButtonStatus =
  process.env.STORYBOOK || process.env.NODE_ENV === 'test'
    ? (size: 'M' | 'L', status: 'DEFAULT' | 'HOVER' | 'PRESS') => {
        return buttonStatusVariants[
          (size + status) as 'MHOVER' | 'MPRESS' | 'LHOVER' | 'LPRESS'
        ];
      }
    : undefined;
