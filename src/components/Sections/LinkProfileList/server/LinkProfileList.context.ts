import { createStaticContext } from '@/utils/context/StaticContext';

export interface LinkProfileListProps {
  user_id: string;
  name: string;
  job: string;
  src: string;
  alt: string;
  social: {
    company: CompanyIconToken;
    color: 'GRAY';
    background: 'NONE';
    state: 'DEFAULT';
    url: string;
  }[];
}

interface LinkProfileListData extends LinkProfileListProps {
  image_id: number;
}

const StaticContextLinkProfileList = createStaticContext<{
  ctxData: LinkProfileListData[];
}>({
  ctxData: [],
});

export default StaticContextLinkProfileList;
