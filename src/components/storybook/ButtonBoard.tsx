import React from 'react';
import Button from '@/composable/Button/Button';
import Grid from '@/composable/Grid/Grid';
import Text from '@/composable/Text/Text';
import { globalThemeVars } from '@/styles/theme.css';
import { fontWrapperStyle } from './FontWrapper.css';

// 버튼 상태와 텍스트를 배열로 정의
const buttonStates: {
  size: 'M' | 'L';
  status: 'DEFAULT' | 'HOVER' | 'PRESS';
  text: string;
}[] = [
  { size: 'M', status: 'DEFAULT', text: '더보기' },
  { size: 'M', status: 'HOVER', text: '더보기' },
  { size: 'M', status: 'PRESS', text: '더보기' },
  { size: 'L', status: 'DEFAULT', text: '메일 보내기' },
  { size: 'L', status: 'HOVER', text: '메일 보내기' },
  { size: 'L', status: 'PRESS', text: '메일 보내기' },
];

const ButtonBoard = () => {
  // 각 버튼 상태에 대한 버튼 렌더링
  return (
    <Grid
      as="div"
      className={fontWrapperStyle}
      templateColumns="1fr 1fr 1fr"
      templateRows="fit-content fit-content fit-content fit-content"
      style={{
        rowGap: '1.81rem',
        padding: '2rem 0.5rem',

        backgroundColor: globalThemeVars.color['gray-scale-05'],
      }}
    >
      <Text
        as="h3"
        typoToken="title-m-bold"
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          margin: '0',
          color: globalThemeVars.color['gray-scale-00'],
        }}
      >
        Default
      </Text>
      <Text
        as="h3"
        typoToken="title-m-bold"
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          margin: '0',
          color: globalThemeVars.color['gray-scale-00'],
        }}
      >
        Hover
      </Text>
      <Text
        as="h3"
        typoToken="title-m-bold"
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          margin: '0',
          color: globalThemeVars.color['gray-scale-00'],
        }}
      >
        Press
      </Text>
      {buttonStates.map(({ size, status, text }) => (
        <Button
          key={`${size}-${status}`}
          size={size}
          status={status}
          width={size === 'M' ? '6.875rem' : '20rem'}
        >
          {text}
        </Button>
      ))}
    </Grid>
  );
};

export default ButtonBoard;
