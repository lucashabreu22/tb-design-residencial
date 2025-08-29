import "./style.css";
import { ArrowRight } from "lucide-react";
import ProjectGrid from "../ProjectGrid";
import { useProjects } from "../../hooks/useProjects";

const Projetos = () => {
  const { projetos } = useProjects();

  return (
    <section className="projetos-section">
      <div className="projeto-title-cointainer">
        <div className="title-text">
          <h1 className="projeto-title font-le-quarte">Projetos em Destaque</h1>
          <p>
            Conheça algum de nossos trabalho, unindo design inovador com
            funcionalidade inteligente.
          </p>
        </div>
        <button className="todos-projetos-button">
          Todos os Projetos <ArrowRight size={20} />
        </button>
      </div>

      <ProjectGrid projetos={projetos} />
    </section>
  );
};

export default Projetos;
