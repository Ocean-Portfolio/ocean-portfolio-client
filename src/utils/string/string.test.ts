import capitalizeFirstLetter from './capitalizeFirstLetter';
import replaceAll from './replaceAll';

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

  describe('replaceAll', () => {
    test('일반 문자열에서의 교체', () => {
      expect(replaceAll('hello world', 'world', 'everyone')).toBe(
        'hello everyone',
      );
    });

    test('교체 대상이 여러 번 나오는 경우', () => {
      expect(replaceAll('hello world world', 'world', 'everyone')).toBe(
        'hello everyone everyone',
      );
    });

    test('교체 대상이 없는 경우', () => {
      expect(replaceAll('hello world', 'app', 'everyone')).toBe('hello world');
    });

    test('대상 문자열이 빈 문자열인 경우', () => {
      expect(replaceAll('hello world', '', '-')).toBe('hello world');
    });

    test('교체 문자열이 빈 문자열인 경우', () => {
      expect(replaceAll('hello world', 'world', '')).toBe('hello ');
    });

    test('원본 문자열이 빈 문자열인 경우', () => {
      expect(replaceAll('', 'world', 'everyone')).toBe('');
    });

    test('교체 대상 문자열과 교체 문자열이 동일한 경우', () => {
      expect(replaceAll('hello world', 'world', 'world')).toBe('hello world');
    });

    test('대소문자 구분', () => {
      expect(replaceAll('Hello World', 'world', 'everyone')).toBe(
        'Hello World',
      );
    });

    test('특수 문자가 포함된 교체', () => {
      expect(replaceAll('hello, world! world?', 'world', 'everyone')).toBe(
        'hello, everyone! everyone?',
      );
    });

    test('숫자를 포함한 교체', () => {
      expect(replaceAll('123-456-789', '-', ':')).toBe('123:456:789');
    });

    test('교체 대상 문자가 연속해서 나오는 경우', () => {
      expect(replaceAll('hello--world', '--', '-')).toBe('hello-world');
    });

    test('복잡한 문자열 교체', () => {
      const original =
        'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
      const replaced =
        'The quick brown fox jumps over the lazy cat. If the cat barked, was it really lazy?';
      expect(replaceAll(original, 'dog', 'cat')).toBe(replaced);
    });
  });
});
