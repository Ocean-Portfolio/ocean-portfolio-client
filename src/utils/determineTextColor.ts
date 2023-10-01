const determineTextColor = (backgroundColor: string) => {
  const hex =
    backgroundColor.charAt(0) === '#'
      ? backgroundColor.substring(1, 7)
      : backgroundColor;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance < 128 ? 'white' : 'black'; // 128은 중간 밝기 값을 나타냅니다.
};

export default determineTextColor;
