import { createContext } from 'react';
import {
  GetCategoryBySectionIdQuery,
  GetImageByIdQuery,
  GetSkillsByCategoryIdQuery,
} from '@/types/graphql';
import { createStaticContext } from '@/utils/context/StaticContext';

type OriginSkill = GetSkillsByCategoryIdQuery['getSkillsByCategoryId'][0];

interface SkillData extends OriginSkill {
  image: GetImageByIdQuery['getImageById'] | undefined;
}

type OriginCategory = GetCategoryBySectionIdQuery['getCategoryBySectionId'][0];

interface CategoryData extends OriginCategory {
  skills: SkillData[];
}

export interface StaticContextSkillProps {
  data: CategoryData[];
  userAgent: UAParser.IResult;
}

export const StaticContextSkill = createStaticContext<StaticContextSkillProps>({
  data: [],
  userAgent: {
    ua: '',
    browser: {
      name: '',
      version: '',
      major: '',
    },
    device: {
      model: '',
      vendor: '',
      type: '',
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
});

export interface ValueContextSkillProps {
  selectedIdx: number;
  isTabOpen: boolean;
  isModalOpen: boolean;
}

export interface DispatcherContextSkillProps {
  setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
  setIsTabOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ValueContextSkill = createContext<ValueContextSkillProps>({
  selectedIdx: 1,
  isTabOpen: false,
  isModalOpen: false,
});

export const DispatcherContextSkill =
  createContext<DispatcherContextSkillProps>({
    setSelectedIdx: () => {},
    setIsTabOpen: () => {},
    setIsModalOpen: () => {},
  });
