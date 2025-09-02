import "./style.css";
import ServiceCard from "../ServiceCard";

const ServicesGrid = ({ services, limit, showButton, variant = "section" }) => {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <div className={`services-container services-container--${variant}`}>
      {displayServices.map((service, index) => (
        <ServiceCard
          key={service.id || index}
          service={service}
          showButton={showButton}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;
