import { isDevelopment } from '@/const/isDevelopment';

export const userPageWithId = (id: number) => {
  switch (id) {
    case 1:
      return isDevelopment ? '/sungyeon' : 'https://yoon0cean.brand-ing.me';
    case 2:
      return isDevelopment ? '/yeji' : 'https://trialegg.brand-ing.me';
    case 3:
      return isDevelopment ? '/jaeyoon' : 'https://happie-0range.brand-ing.me';
    default:
      return '/';
  }
};
