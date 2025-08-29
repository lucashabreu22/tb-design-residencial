import Banner from "../../components/Banner";
import Servicos from "../../components/Servicos";
import Projetos from "../../components/Projetos";
import Contato from "../../components/Contato";

import "./styles.css";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Servicos showButton={true} />
      <Projetos />
      <Contato />
    </>
  );
};

export default HomePage;
