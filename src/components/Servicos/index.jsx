import "./style.css";
import ServicesGrid from "../ServicesGrid";
import { useServices } from "../../hooks/useServices";

const Servicos = ({ showButton }) => {
  const { servicos } = useServices();

  return (
    <section className="servicos-section" id="servicos">
      <div className="servicos-text">
        <h1 className="font-le-quarte ">Nossos Serviços</h1>
        <p>Solução completa para transformar seu ambiente.</p>
      </div>

      <ServicesGrid servicos={servicos} showButton={showButton} />
    </section>
  );
};

export default Servicos;
