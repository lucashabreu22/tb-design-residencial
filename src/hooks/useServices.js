import { servicesData } from "../data/services";

export const useServices = () => {
  const services = servicesData;

  const getServiceByTitle = (title) => {
    return services.find((service) => service.title === title);
  };

  const getServiceById = (id) => {
    return services.find((service) => service.id === id);
  };

  const getFeaturedServices = (limit = 3) => {
    return services.slice(0, limit);
  };

  return {
    services,
    getServiceByTitle,
    getServiceById,
    getFeaturedServices,
  };
};
