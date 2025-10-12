import SubPageHeader from "../../components/SubPageHeader";
import aboutPageBg from "../../assets/img/about-bg.png";
import Contact from "../../components/Contact";
import BackToTop from "../../components/common/BackToTop";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import aboutUsImage from "../../assets/img/imageAboutUsSection.png";
import fonderImage from "../../assets/img/founderImg.png";
import videoApresentacao from "../../assets/img/videoApresentacao.mp4";
import "./style.css";

const AboutPage = () => {
  const [aboutUsRef, isAboutUsVisible] = useIntersectionObserver();
  const [founderRef, isFounderVisible] = useIntersectionObserver();

  return (
    <>
      <SubPageHeader
        title={"Sobre Nós"}
        subTitle={
          "Conheça nossa história e valores e quem torna seus projetos realidade."
        }
        backgroundImage={aboutPageBg}
      />

      <section
        className={`about-us fade-in-up ${isAboutUsVisible ? "animate" : ""}`}
        ref={aboutUsRef}
      >
        <div className="about-us-content">
          <div className="about-us-text">
            <h2 className="about-us-title font-le-quarte">Nossa História</h2>
            <p className="about-us-text">
              Nosso escritório nasceu de uma paixão verdadeira: transformar
              sonhos em espaços únicos e funcionais. Criamos um ambiente onde
              você encontra tudo em um só lugar, sem a necessidade de lidar com
              diferentes profissionais para concluir o seu projeto.
            </p>
            <p className="about-us-text">
              Oferecemos soluções completas que vão do arquitetônico ao
              estrutural, do paisagístico ao luminotécnico, sempre de forma
              integrada e harmônica. Nossa abordagem de arquitetura e engenharia
              espelho garante que cada detalhe reflita a sua essência e estilo
              de vida, resultando em projetos personalizados, autênticos e
              feitos para você.
            </p>
          </div>
          <div className="about-us-img">
            <img src={aboutUsImage} alt="aboutUsImag" />
          </div>
        </div>
      </section>

      <section
        className={`about-founder fade-in-up ${
          isFounderVisible ? "animate" : ""
        }`}
        ref={founderRef}
      >
        <h2 className="about-founder-title font-le-quarte">
          Conheça o responsável
        </h2>
        <div className="about-founder-content">
          <div className="about-founder-img">
            <img src={fonderImage} alt="Thalyson Borges" />
          </div>
          <div className="about-founder-text">
            <p className="about-founder-text">
              Olá, sou Thalyson Borges, 28 anos, natural de Rio Paranaíba/MG.
              Engenheiro Civil formado pela UFV (2021), com especialização em
              Arquitetura Residencial e modelagem BIM, tenho como propósito
              transformar sonhos em realidade por meio de projetos que unem
              estética, funcionalidade e técnica.
            </p>
            <p className="about-founder-text">
              Minha empresa nasceu para atender suas necessidades com eficiência
              e qualidade, criando uma parceria sólida e transparente. Meu
              compromisso é projetar a casa dos seus sonhos com inovação,
              personalização e um processo simples e agradável.
            </p>
            <p className="about-founder-text">
              Estou entusiasmado para começar essa jornada com você e
              transformar suas ideias em um lar único.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="video-title font-le-quarte">
          Como a TB Design foi idealizada
        </h2>
        <div className="video-presentation-container">
          <video
            className="video-presentation"
            src={videoApresentacao}
            controls
            preload="metadata"
          >
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </section>

      <BackToTop />

      <Contact title="Vamos criar juntos?" backgroundColor="white" />
    </>
  );
};

export default AboutPage;
