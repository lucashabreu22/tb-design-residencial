import "./style.css";
import { ArrowRight } from "lucide-react";

/* Image Imports */
import casaLFimg from "../../assets/img/projetosImg/casaLFimg.jpg";
import casaMVimg from "../../assets/img/projetosImg/casaMVimg.avif";
import casaPJimg from "../../assets/img/projetosImg/casaPJimg.avif";

const Projetos = () => {
  const projetos = [
    {
      id: 1,
      categoria: "Residencial",
      titulo: "casa L|F",
      descricao:
        "Projeto de residência contemporânea em Uberlândia/MG, com linhas retas e horizontais que conectam os espaços e reforçam amplitude e fluidez. A fachada combina madeira, porcelanato e iluminação em LED quente, destacada pelo paisagismo que integra natureza e arquitetura.",
      imagem: casaLFimg,
    },
    {
      id: 2,
      categoria: "Interiores",
      titulo: "casa P|J",
      descricao:
        "Residência de 180m² em Patos de Minas/MG, distribuída em dois pavimentos, com fachada imponente marcada por volumetria e jogos de formas e sombras. O projeto valoriza elegância e funcionalidade, unindo pergolado, luz natural e paisagismo para criar um espaço moderno, sofisticado e acolhedor.",
      imagem: casaMVimg,
    },
    {
      id: 3,
      categoria: "Interiores",
      titulo: "casa M|V",
      descricao:
        "Casa de fazenda de 120m² em Rio Paranaíba/MG, com garagem para três carros, área gourmet integrada à piscina e ambientes amplos e acolhedores. O projeto combina rusticidade e modernidade, destacando-se pelo telhado estilo chalé com vigas de aço, uso de madeira e pedra natural, além de um paisagismo que integra a residência à natureza.",
      imagem: casaPJimg,
    },
  ];

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

      <div className="projetos-grid">
        {projetos.map((projeto) => (
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
    </section>
  );
};

export default Projetos;
