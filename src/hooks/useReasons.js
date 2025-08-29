import { reasonsData } from "../data/reasons";

export const useReasons = () => {
  const reasons = reasonsData;

  const getFeaturedReasons = (limit = 3) => {
    return reasons.slice(0, limit);
  };

  const getReasonById = (id) => {
    return reasons.find((reason) => reason.id === id);
  };

  return {
    reasons,
    getFeaturedReasons,
    getReasonById,
  };
};
