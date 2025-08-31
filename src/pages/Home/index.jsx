import Banner from "../../components/Banner";
import Servicos from "../../components/Servicos";
import Projetos from "../../components/Projetos";
import Contato from "../../components/Contato";
import BackToTop from "../../components/common/BackToTop";

import "./styles.css";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Servicos showButton={true} />
      <Projetos />
      <Contato />
      <BackToTop />
    </>
  );
};

export default HomePage;
