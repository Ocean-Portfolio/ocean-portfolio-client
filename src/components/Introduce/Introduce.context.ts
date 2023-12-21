import {
  GetImageByIdQuery,
  GetIntroducesBySectionIdQuery,
} from '@/types/graphql';
import { createStaticContext } from '@/utils/context/StaticContext';

type IntroduceData = GetIntroducesBySectionIdQuery['getIntroducesBySectionId'];

export interface IntroduceContextData extends IntroduceData {
  visible_status: VisibleStatusToken;
  image?: GetImageByIdQuery['getImageById'];
}

export interface IntroduceContextProps extends IntroduceContextData {
  title: string;
}

export const StaticContextIntroduce =
  createStaticContext<IntroduceContextProps>({
    id: '',
    title: '',
    visible_status: 'VISIBLE',
    image: {
      id: '',
      name: '',
      storage_url: '',
    },
  });
