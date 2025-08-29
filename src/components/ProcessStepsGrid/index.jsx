import "./style.css";
import ProcessStepCard from "../ProcessStepCard";

const ProcessStepsGrid = ({ processSteps, limit }) => {
  const displaySteps = limit ? processSteps.slice(0, limit) : processSteps;

  return (
    <div className="process-steps-grid">
      {displaySteps.map((step) => (
        <ProcessStepCard key={step.id} step={step} />
      ))}
    </div>
  );
};

export default ProcessStepsGrid;
