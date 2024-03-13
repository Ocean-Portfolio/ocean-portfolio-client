export const getUserNameWithURL = (pathname: string) => {
  switch (pathname) {
    case '/sungyeon':
      return '윤성연';
    case '/yeji':
      return '최예지';
    case '/jaeyoon':
      return '안재윤';
    default:
      return '윤성연';
  }
};
