import { projectsData } from "../data/projects";

export const useProjects = () => {
  const projects = projectsData;

  const getProjectsByCategory = (category) => {
    return projects.filter((project) => project.categoria === category);
  };

  const getFeaturedProjects = (limit = 3) => {
    return projects.slice(0, limit);
  };

  const getProjectById = (id) => {
    return projects.find((project) => project.id === id);
  };

  return {
    projects,
    getProjectsByCategory,
    getFeaturedProjects,
    getProjectById,
  };
};
