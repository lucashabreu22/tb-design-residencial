import "./style.css";
import { CircleCheckBig, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ servico, showButton = false }) => {
  const IconComponent = servico.icon;

  return (
    <div className="service-card">
      <div className="service-header">
        <IconComponent className="service-main-icon" size={32} />
        <h2>{servico.title}</h2>
      </div>
      <p>{servico.description}</p>
      <ul className="service-items">
        {servico.subServices.map((subService, subIndex) => (
          <li key={subIndex} className="service-item">
            <CircleCheckBig className="service-icon" size={16} />
            {subService}
          </li>
        ))}
        {showButton && (
          <Link to="/servicos">
            <button className="saiba-mais-bttn">
              Saiba Mais <ArrowRight size={20} />
            </button>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default ServiceCard;
