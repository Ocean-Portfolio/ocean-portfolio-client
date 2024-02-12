import {
  GetImageByIdQuery,
  GetProjectsBySectionIdQuery,
} from '@/types/graphql';
import { createStaticContext } from '@/utils/context/StaticContext';

type ProjectData =
  GetProjectsBySectionIdQuery['getProjectsBySectionId'][number];

export interface ProjectContextData extends ProjectData {
  mode: ProjectModeToken;
  mockup: MockupTypeToken;
  end_time: EndTimeToken;
  image?: GetImageByIdQuery['getImageById'];
}

export interface ProjectContextProps {
  title: string;
  data: ProjectContextData[];
}

export const StaticContextProject = createStaticContext<ProjectContextProps>({
  title: '',
  data: [],
});
