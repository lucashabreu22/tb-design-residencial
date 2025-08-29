import "./style.css";
import bannerImage from "/src/assets/img/hero-project.jpg";

import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="img-container">
        <img src={bannerImage} alt="mainBannerImg" />
        <div className="imgBg"></div>
      </div>

      <div className="banner-text">
        <h1>Transformando Espaços,</h1>
        <h1>Criando Lares</h1>
        <p>
          Desenvolvemos projetos onde cada detalhe é pensado para unir estética,
          funcionalidade e conforto, criando ambientes que refletem sua
          personalidade e estilo de vida.
        </p>

        <div className="bannerBttns">
          <Link to={"/servicos"}>
            <button className="primaryBttn">
              Serviços <ArrowRight size={20} />
            </button>
          </Link>

          <Link to={"/"}>
            <button className="secondaryBttn">
              Projetos <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
