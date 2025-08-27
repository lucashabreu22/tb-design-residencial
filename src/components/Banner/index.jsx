import "./style.css";

import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section>
      <div className="img-container">
        <img src="/src/assets/img/hero-project.jpg" alt="mainBannerImg" />
        <div className="imgBg"></div>
      </div>

      <div className="banner-text">
        <h1>Transformando Espaços, Criando Lares</h1>
        <p>
          Desenvolvemos projetos onde cada detalhe é pensado para unir estética,
          funcionalidade e conforto, criando ambientes que refletem sua
          personalidade e estilo de vida.
        </p>

        <div className="bannerBttns">
          <button className="primaryBttn">
            Nossos Serviços <ArrowRight size={20} />
          </button>
          <button className="secondaryBttn">
            Nossos Projetos <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
