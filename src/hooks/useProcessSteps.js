import { processStepsData } from "../data/processSteps";

export const useProcessSteps = () => {
  const processSteps = processStepsData;

  const getStepById = (id) => {
    return processSteps.find((step) => step.id === id);
  };

  const getStepByNumber = (number) => {
    return processSteps.find((step) => step.number === number);
  };

  return {
    processSteps,
    getStepById,
    getStepByNumber,
  };
};
