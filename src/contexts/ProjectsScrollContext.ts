import { createContext, useContext } from "react";

export type ProjectsScrollState = {
  atStart: boolean;
  atEnd: boolean;
};

const ProjectsScrollContext = createContext<{
  setScrollState: (state: ProjectsScrollState) => void;
}>({
  setScrollState: () => {},
});

export function useProjectsScroll() {
  return useContext(ProjectsScrollContext);
}

export { ProjectsScrollContext };
