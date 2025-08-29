import "./style.css";

const ProcessStepCard = ({ step }) => {
  return (
    <div className="process-step-card">
      <div className="process-step-number">{step.number}</div>
      <h3 className="process-step-title">{step.title}</h3>
      <p className="process-step-description">{step.description}</p>
    </div>
  );
};

export default ProcessStepCard;
