import "./style.css";

const ProjectGrid = ({ projects, limit, variant = "default" }) => {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className={`projetos-grid projetos-grid--${variant}`}>
      {displayProjects.map((project) => (
        <div key={project.id} className="projeto-card">
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
  );
};

export default ProjectGrid;
