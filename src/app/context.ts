import UAParser from 'ua-parser-js';
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
  userAgent: UAParser.IResult;
  userInfo: UserInfoData;
  sections: SectionData[];
}

export const StaticContextPageInfo = createStaticContext<PageInfoData>({
  userAgent: {
    ua: '',
    browser: {
      name: '',
      version: '',
      major: '',
    },
    device: {
      model: '',
      type: '',
      vendor: '',
    },
    engine: {
      name: '',
      version: '',
    },
    os: {
      name: '',
      version: '',
    },
    cpu: {
      architecture: '',
    },
  },
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
