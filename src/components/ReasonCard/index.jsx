import "./style.css";

const ReasonCard = ({ reason }) => {
  const IconComponent = reason.icon;

  return (
    <div className="reason-card">
      <div className="reason-icon-container">
        <IconComponent className="reason-icon" size={32} />
      </div>
      <h3 className="reason-title">{reason.title}</h3>
      <p className="reason-description">{reason.description}</p>
    </div>
  );
};

export default ReasonCard;
