import { createContext } from 'react';
import { ProjectContextData } from '../Project/Project.context';

export interface ContextDispatchNormalProjectProps {
  setMouseInSection: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ContextNormalProjectProps {
  isMouseInSection: boolean;
  observerRef: React.RefObject<HTMLDivElement>;
  projectData: ProjectContextData[];
}

export const ContextDispatchNormalProject =
  createContext<ContextDispatchNormalProjectProps>({
    setMouseInSection: () => {},
  });

export const ContextValueNormalProject =
  createContext<ContextNormalProjectProps>({
    isMouseInSection: false,
    observerRef: { current: null },
    projectData: [],
  });
