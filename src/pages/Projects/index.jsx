import "./style.css";
import porfolioImageBg from "../../assets/img/portfolio-bg.jpg";

import SubPageHeader from "../../components/SubPageHeader";
import ProjectGrid from "../../components/ProjectGrid";
import Contact from "../../components/Contact";
import BackToTop from "../../components/common/BackToTop";

import { useProjects } from "../../hooks/useProjects";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [isLoading, setIsLoading] = useState(false);
  const { projects, getProjectsByCategory } = useProjects();

  // Constante com os filtros
  const filterButtons = [
    { id: "todos", label: "Todos", value: "Todos" },
    { id: "residencial", label: "Residencial", value: "Residencial" },
    { id: "interiores", label: "Interiores", value: "Interiores" },
    { id: "cenografia", label: "Cenografia", value: "Cenografia" },
  ];

  const handleCategoryClick = async (category) => {
    setIsLoading(true);
    setActiveCategory(category);

    // Simula um pequeno delay para mostrar o loading
    await new Promise((resolve) => setTimeout(resolve, 300));

    setIsLoading(false);

    // Scroll suave para os resultados
    const gridElement = document.querySelector(".gridProjects");
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : getProjectsByCategory(activeCategory);

  return (
    <>
      <SubPageHeader
        title={"Portfólio"}
        subTitle={
          "Cada projeto é uma oportunidade de criar algo extraordinário, unindo design inovador com funcionalidade inteligente"
        }
        backgroundImage={porfolioImageBg}
      />

      <section className="projetos-page-content">
        <div className="filterButtons">
          {filterButtons.map((filter) => (
            <button
              key={filter.id}
              className={`filter-button ${
                activeCategory === filter.value ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(filter.value)}
              aria-label={`Filtrar projetos por ${filter.label}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid de projetos ou estado vazio */}
        {filteredProjects.length > 0 ? (
          <div
            className={`gridProjects ${isLoading ? "projects-loading" : ""}`}
          >
            <ProjectGrid
              projects={filteredProjects || []}
              variant="portfolio"
            />
          </div>
        ) : (
          <div className="empty-state">
            <h3>Nenhum projeto encontrado</h3>
            <p>
              Não há projetos disponíveis na categoria "{activeCategory}". Tente
              selecionar outra categoria.
            </p>
          </div>
        )}
      </section>

      {/* Componente BackToTop */}
      <BackToTop />

      <Contact backgroundColor="white" title="Gostou do que viu?" />
    </>
  );
};

export default Projects;
