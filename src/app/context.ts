import { createStaticContext } from '@/utils/context/StaticContext';

export interface UserInfoData {
  token: UserNameToken;
  id: string;
  name: string;
  email: string;
  job?: string | null;
  image_id?: number | null;
}

export interface SectionData {
  id: string;
  name: string;
  sort_order: number;
  section_type: SectionTypeToken;
}

interface PageInfoData {
  userInfo: UserInfoData;
  sections: SectionData[];
}

export const StaticContextPageInfo = createStaticContext<PageInfoData>({
  userInfo: {
    token: 'sungyeon',
    id: '',
    name: '',
    email: '',
    job: null,
    image_id: null,
  },
  sections: [],
});
