import { randomBetweenNumber, randomIndex } from './random';

describe('number', () => {
  describe('randomBetweenNumber', () => {
    it('반환된 값이 최솟값 이상이어야 한다', () => {
      const min = 1;
      const max = 10;
      for (let i = 0; i < 10; i++) {
        const result = randomBetweenNumber(min, max);
        expect(result).not.toBeLessThan(min);
      }
    });

    it('반환된 값이 최댓값 이하이어야 한다', () => {
      const min = 1;
      const max = 10;
      for (let i = 0; i < 10; i++) {
        const result = randomBetweenNumber(min, max);
        expect(result).not.toBeGreaterThan(max);
      }
    });
  });

  describe('randomIndex', () => {
    it('반환된 인덱스가 배열의 범위 안에 있어야 한다', () => {
      const array = ['a', 'b', 'c', 'd', 'e'];
      for (let i = 0; i < 10; i++) {
        const index = randomIndex(array);
        expect(index).toBeGreaterThanOrEqual(0);
        expect(index).toBeLessThanOrEqual(array.length - 1);
      }
    });
  });
});
