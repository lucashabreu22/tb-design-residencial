import "./style.css";
import { CircleCheckBig, House, Ruler, Box, ArrowRight } from "lucide-react";

const Servicos = () => {
  const servicos = [
    {
      title: "Projeto Arquitetônico",
      description: "Desenvolvimento completo de projetos residenciais únicos",
      icon: House,
      subServices: [
        "Anteprojeto",
        "Projeto Legal",
        "Aprovação Prefeitura",
        "Projeto Executivo",
      ],
    },
    {
      title: "Design de Interiores",
      description: "Ambientes funcionais e esteticamente únicos",
      icon: Ruler,
      subServices: [
        "Layouts Personalizados",
        "Seleção de Materiais",
        "Mobiliário",
        "Iluminação",
      ],
    },
    {
      title: "Modelagem 3D",
      description: "Visualização realística do seu projeto.",
      icon: Box,
      subServices: [
        "Renders Fotorrealísticos",
        "Tours Virtuais",
        "Plantas 3D",
        "Animações",
      ],
    },
  ];

  return (
    <section className="servicos-section" id="servicos">
      <div className="servicos-text">
        <h1 className="font-le-quarte ">Nossos Serviços</h1>
        <p>Solução completa para transformar seu ambiente.</p>
      </div>

      <div className="services-container">
        {servicos.map((servico, index) => {
          const IconComponent = servico.icon; // Extrai o componente do ícone
          return (
            <div key={index} className="service-card">
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
                <button className="saiba-mais-bttn">
                  Saiba Mais <ArrowRight size={20} />
                </button>
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Servicos;
