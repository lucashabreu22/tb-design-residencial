import "./style.css";
import ServicesGrid from "../ServicesGrid";
import { useServices } from "../../hooks/useServices";

const Services = ({ showButton }) => {
  const { services } = useServices();

  return (
    <section className="servicos-section" id="servicos">
      <div className="servicos-text">
        <h1 className="font-le-quarte ">Nossos Serviços</h1>
        <p>Solução completa para transformar seu ambiente.</p>
      </div>

      <ServicesGrid services={services} showButton={showButton} />
    </section>
  );
};

export default Services;
