import "./style.css";
import bannerImage from "/src/assets/img/hero-project.jpg";
import watermarkImage from "/src/assets/img/PNG (MARCA DÁGUA)-01.png";

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
        {/* Marca d'água centralizada */}
        <div className="watermark-container">
          <img
            src={watermarkImage}
            alt="TB Design Logo"
            className="watermark-image"
          />
        </div>
        <h1 className="font-gantic">Transformando Espaços, Criando Lares</h1>{" "}
        <div className="bannerBttns">
          <Link to={"/servicos"}>
            <button className="primaryBttn">
              Serviços <ArrowRight size={20} />
            </button>
          </Link>

          <Link to={"/portfolio"}>
            <button className="secondaryBttn">
              Portfólio <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
