import SubPageHeader from "../../components/SubPageHeader";
import aboutPageBg from "../../assets/img/about-bg.png";

const AboutPage = () => {
  return (
    <>
      <SubPageHeader
        title={"Sobre Nós"}
        subTitle={
          "Conheça nossa história e valores e quem torna seus projetos realidade."
        }
        backgroundImage={aboutPageBg}
      />
    </>
  );
};

export default AboutPage;
