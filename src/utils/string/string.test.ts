import capitalizeFirstLetter from './capitalizeFirstLetter';

describe('string', () => {
  describe('capitalizeFirstLetter', () => {
    test('기본 문자열', () => {
      expect(capitalizeFirstLetter('hello')).toBe('Hello');
    });

    test('빈 문자열', () => {
      expect(capitalizeFirstLetter('')).toBe('');
    });

    test('이미 대문자인 문자열', () => {
      expect(capitalizeFirstLetter('Hello')).toBe('Hello');
    });

    test('전체가 대문자인 문자열', () => {
      expect(capitalizeFirstLetter('HELLO')).toBe('Hello');
    });

    test('여러 단어가 포함된 문자열', () => {
      expect(capitalizeFirstLetter('hello world')).toBe('Hello world');
    });

    test('특수 문자로 시작하는 문자열', () => {
      expect(capitalizeFirstLetter('!hello')).toBe('!hello');
    });

    test('숫자로 시작하는 문자열', () => {
      expect(capitalizeFirstLetter('123hello')).toBe('123hello');
    });

    test('한글 문자열', () => {
      expect(capitalizeFirstLetter('안녕하세요')).toBe('안녕하세요');
    });

    test('공백으로 시작하는 문자열', () => {
      expect(capitalizeFirstLetter(' hello')).toBe(' hello');
    });
  });
});
