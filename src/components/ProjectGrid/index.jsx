import "./style.css";

import Modal from "../Modal";
import ImgCarrosel from "../ImgCarrosel";
import { useState } from "react";
import Swiper from "../Swiper";

const ProjectGrid = ({
  projects,
  limit,
  variant = "default",
  useModal = true,
}) => {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    if (!useModal) return; // Não abre modal se useModal for false
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className={`projetos-grid projetos-grid--${variant}`}>
        {displayProjects.map((project) => (
          <div
            key={project.id}
            className={`projeto-card ${
              useModal ? "projeto-card--clickable" : ""
            }`}
            onClick={() => openModal(project)}
            style={{ cursor: useModal ? "pointer" : "default" }}
          >
            <div className="projeto-image-container">
              <img
                src={project.imagem}
                alt={project.titulo}
                className="projeto-image"
              />
            </div>
            <div className="projeto-content">
              <h3 className="projeto-titulo">{project.titulo}</h3>
              <p className="projeto-descricao">{project.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal - só renderiza se useModal for true */}
      {useModal && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedProject?.titulo}
          subTitle={`${selectedProject?.ano} - ${selectedProject?.cidade}`}
        >
          {selectedProject && (
            <>
              <Swiper projects={selectedProject} />

              <div style={{ marginTop: "1rem" }}>
                {selectedProject.descricaoModal && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedProject.descricaoModal,
                    }}
                  />
                )}
              </div>
            </>
          )}
        </Modal>
      )}
    </>
  );
};

export default ProjectGrid;
