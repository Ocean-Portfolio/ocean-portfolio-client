import { createContext } from 'react';
import { ProjectContextData } from '../Project/Project.context';

export interface ContextDispatchNormalProjectProps {
  setMouseInSection: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ContextNormalProjectProps {
  isMouseInSection: boolean;
  projectData: ProjectContextData[];
}

export const ContextDispatchNormalProject =
  createContext<ContextDispatchNormalProjectProps>({
    setMouseInSection: () => {},
  });

export const ContextValueNormalProject =
  createContext<ContextNormalProjectProps>({
    isMouseInSection: false,
    projectData: [],
  });
