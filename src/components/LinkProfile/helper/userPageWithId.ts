export const userPageWithId = (id: number) => {
  switch (id) {
    case 1:
      return process.env.NODE_ENV === 'development'
        ? '/sungyeon'
        : 'https://yoon0cean.brand-ing.me';
    case 2:
      return process.env.NODE_ENV === 'development'
        ? '/yeji'
        : 'https://trialegg.brand-ing.me';
    case 3:
      return process.env.NODE_ENV === 'development'
        ? '/jaeyoon'
        : 'https://happie-0range.brand-ing.me';
    default:
      return '/';
  }
};
