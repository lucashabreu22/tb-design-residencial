import { servicesData } from "../data/services";

export const useServices = () => {
  const servicos = servicesData;

  const getServiceByTitle = (title) => {
    return servicos.find((servico) => servico.title === title);
  };

  const getServiceById = (id) => {
    return servicos.find((servico) => servico.id === id);
  };

  const getFeaturedServices = (limit = 3) => {
    return servicos.slice(0, limit);
  };

  return {
    servicos,
    getServiceByTitle,
    getServiceById,
    getFeaturedServices,
  };
};
