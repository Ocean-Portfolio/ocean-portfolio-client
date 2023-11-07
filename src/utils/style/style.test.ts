import { ODSTextTokenArray } from '@/const/fonts';
import { randomIndex } from '../number/random';
import calcRemToPx from './calcRemToPx';
import determineTextColor from './determineTextColor';
import getTextStyle from './getTextStyle';

describe('style', () => {
  describe('calcRemToPx', () => {
    // 테스트 케이스 1: 기본적인 REM 값을 PX로 변환
    it('1rem은 16px와 같아야 한다', () => {
      const remValue = '1rem';
      const pxValue = calcRemToPx(remValue);
      expect(pxValue).toBe(16);
    });

    // 테스트 케이스 2: 소수점을 포함하는 REM 값을 PX로 변환
    it('0.5rem은 8px와 같아야 한다', () => {
      const remValue = '0.5rem';
      const pxValue = calcRemToPx(remValue);
      expect(pxValue).toBe(8);
    });

    // 테스트 케이스 3: 0rem 값이 0px로 변환되는지 확인
    it('0rem은 0px와 같아야 한다', () => {
      const remValue = '0rem';
      const pxValue = calcRemToPx(remValue);
      expect(pxValue).toBe(0);
    });

    // 테스트 케이스 4: 소수점이 있는 값이 정확히 변환되는지 확인
    it('2.75rem은 44px와 같아야 한다', () => {
      const remValue = '2.75rem';
      const pxValue = calcRemToPx(remValue);
      expect(pxValue).toBe(44);
    });

    // 테스트 케이스 5: 잘못된 입력값 처리 - 문자열 포함
    it('잘못된 rem 값에 대해서는 NaN을 반환해야 한다', () => {
      const remValue = 'abc';
      const pxValue = calcRemToPx(remValue);
      expect(pxValue).toBeNaN();
    });

    // 테스트 케이스 6: 음수 값이 올바르게 변환되는지 확인
    it('-1rem은 -16px와 같아야 한다', () => {
      const remValue = '-1rem';
      const pxValue = calcRemToPx(remValue);
      expect(pxValue).toBe(-16);
    });
  });

  describe('getTextStyle', () => {
    it('rem 값을 픽셀로 변환하고 올바른 스타일 객체를 반환하는가?', () => {
      const ODSRandomTextToken =
        ODSTextTokenArray[randomIndex(ODSTextTokenArray)];
      const style = getTextStyle(ODSRandomTextToken.key);

      const fontSize = ODSRandomTextToken.value.fontSize;
      const pxFontSize = calcRemToPx(ODSRandomTextToken.value.fontSize);

      const lineHeight = ODSRandomTextToken.value.lineHeight;
      const pxLineHeight = calcRemToPx(ODSRandomTextToken.value.lineHeight);

      const letterSpacing = ODSRandomTextToken.value.letterSpacing;
      const pxLetterSpacing = calcRemToPx(
        ODSRandomTextToken.value.letterSpacing,
      );

      const fontWeight = ODSRandomTextToken.value.fontWeight;

      expect(style).toEqual({
        token: ODSRandomTextToken.key,
        fontSize,
        pxFontSize,
        lineHeight,
        pxLineHeight,
        letterSpacing,
        pxLetterSpacing,
        fontWeight,
      });
    });
  });

  describe('determineTextColor', () => {
    it('짙은 배경색에 대해 white 텍스트 색상을 반환해야 한다', () => {
      expect(determineTextColor('#000000')).toBe('white'); // 매우 어두운 색
      expect(determineTextColor('#123456')).toBe('white'); // 어두운 색
    });

    it('밝은 배경색에 대해 black 텍스트 색상을 반환해야 한다', () => {
      expect(determineTextColor('#ffffff')).toBe('black'); // 매우 밝은 색
      expect(determineTextColor('#fedcba')).toBe('black'); // 밝은 색
    });

    it('#을 포함하지 않는 6자리 배경색에 대해서도 올바르게 작동해야 한다', () => {
      expect(determineTextColor('000000')).toBe('white'); // 매우 어두운 색
      expect(determineTextColor('ffffff')).toBe('black'); // 매우 밝은 색
    });

    it('중간 밝기의 배경색에 대해서도 올바르게 작동해야 한다', () => {
      expect(determineTextColor('#777777')).toBe('white'); // 중간 밝기의 색
      expect(determineTextColor('#888888')).toBe('black'); // 중간 밝기보다 밝은 색
    });

    it('잘못된 형식의 색상 코드에 대해 기본적으로 black을 반환해야 한다', () => {
      expect(determineTextColor('zzzzzz')).toBe('black'); // 잘못된 색상 코드
      expect(determineTextColor('123')).toBe('black'); // 짧은 색상 코드
    });

    // 추가적인 테스트 케이스를 여기에 작성할 수 있습니다.
  });
});
