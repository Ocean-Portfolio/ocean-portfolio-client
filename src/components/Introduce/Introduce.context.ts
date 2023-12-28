import { createStaticContext } from '@/utils/context/StaticContext';

export interface IntroduceContextProps {
  id: string;
}

export const StaticContextIntroduce =
  createStaticContext<IntroduceContextProps>({
    id: '',
  });
