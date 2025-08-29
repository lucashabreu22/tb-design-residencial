import { projectsData } from "../data/projects";

export const useProjects = () => {
  const projetos = projectsData;

  const getProjectsByCategory = (category) => {
    return projetos.filter((projeto) => projeto.categoria === category);
  };

  const getFeaturedProjects = (limit = 3) => {
    return projetos.slice(0, limit);
  };

  const getProjectById = (id) => {
    return projetos.find((projeto) => projeto.id === id);
  };

  return {
    projetos,
    getProjectsByCategory,
    getFeaturedProjects,
    getProjectById,
  };
};
