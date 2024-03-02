import classNames from 'classnames';
import React from 'react';
import Grid from '@/composable/Grid/Grid';
import LinkedButton from '@/composable/LinkedButton/LinkedButton';
import Text from '@/composable/Text/Text';
import {
  backgroundColorVariants,
  colorVariants,
} from '@/styles/common/color.css';
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

const LinkedButtonBoard = () => {
  // 각 버튼 상태에 대한 버튼 렌더링
  return (
    <Grid
      as="div"
      className={classNames(
        fontWrapperStyle,
        backgroundColorVariants['gray-scale-05'],
      )}
      templateColumns="1fr 1fr 1fr"
      templateRows="fit-content fit-content fit-content fit-content"
      style={{
        rowGap: '1.81rem',
        padding: '2rem 0.5rem',
      }}
    >
      <Text
        as="h3"
        typoToken="title-m-bold"
        className={colorVariants['gray-scale-00']}
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          margin: '0',
        }}
      >
        Default
      </Text>
      <Text
        as="h3"
        typoToken="title-m-bold"
        className={colorVariants['gray-scale-00']}
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          margin: '0',
        }}
      >
        Hover
      </Text>
      <Text
        as="h3"
        typoToken="title-m-bold"
        className={colorVariants['gray-scale-00']}
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          margin: '0',
        }}
      >
        Press
      </Text>
      {buttonStates.map(({ size, status, text }) => (
        <LinkedButton
          key={`${size}-${status}`}
          size={size}
          status={status}
          width={size === 'M' ? '6.875rem' : '20rem'}
        >
          {text}
        </LinkedButton>
      ))}
    </Grid>
  );
};

export default LinkedButtonBoard;
