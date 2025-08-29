import "./style.css";
import ServiceCard from "../ServiceCard";

const ServicesGrid = ({ servicos, limit, showButton }) => {
  const displayServices = limit ? servicos.slice(0, limit) : servicos;

  return (
    <div className="services-container">
      {displayServices.map((servico, index) => (
        <ServiceCard
          key={servico.id || index}
          servico={servico}
          showButton={showButton}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;
