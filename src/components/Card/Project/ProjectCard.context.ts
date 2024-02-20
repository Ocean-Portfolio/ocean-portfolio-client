import { createStaticContext } from '@/utils/context/StaticContext';

export interface ProjectCardContextProps {
  sizeToken?: SizeToken;
  name: string;
  content?: string;
  period: string;
  src: string;
  alt: string;
}

const StaticContextProjectCard = createStaticContext<ProjectCardContextProps>({
  name: '',
  content: '',
  period: '',
  src: '',
  alt: '',
});

export default StaticContextProjectCard;
