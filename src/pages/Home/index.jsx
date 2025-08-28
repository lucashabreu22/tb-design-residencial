import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Servicos from "../../components/Servicos";
import Projetos from "../../components/Projetos";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";

import "./styles.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Servicos />
      <Projetos />
      <Contato />
      <Footer />
    </>
  );
};

export default HomePage;
