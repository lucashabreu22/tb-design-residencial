import "./style.css";

const ProjectGrid = ({ projetos, limit }) => {
  const displayProjects = limit ? projetos.slice(0, limit) : projetos;

  return (
    <div className="projetos-grid">
      {displayProjects.map((projeto) => (
        <div key={projeto.id} className="projeto-card">
          <div className="projeto-image-container">
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className="projeto-image"
            />
          </div>
          <div className="projeto-content">
            <h3 className="projeto-titulo">{projeto.titulo}</h3>
            <p className="projeto-descricao">{projeto.descricao}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
