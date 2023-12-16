import capitalizeFirstLetter from '@/utils/string/capitalizeFirstLetter';
import { filteredVisibleStatus } from './filteredVisibleStatus';

interface Data {
  id: string;
  type: string;
  link: string;
  visible_status: string;
}

export const getProlfileSocialData = <P extends Data>(data: P[]) => {
  return filteredVisibleStatus(data).map((sns) => {
    return {
      company: capitalizeFirstLetter(sns.type) as CompanyIconToken,
      color: 'GRAY' as const,
      background: 'NONE' as const,
      state: 'DEFAULT' as const,
      url: sns.link,
    };
  });
};
