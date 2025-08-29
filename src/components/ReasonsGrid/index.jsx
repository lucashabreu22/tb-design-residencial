import "./style.css";
import ReasonCard from "../ReasonCard";

const ReasonsGrid = ({ reasons, limit }) => {
  const displayReasons = limit ? reasons.slice(0, limit) : reasons;

  return (
    <div className="reasons-grid">
      {displayReasons.map((reason) => (
        <ReasonCard key={reason.id} reason={reason} />
      ))}
    </div>
  );
};

export default ReasonsGrid;
