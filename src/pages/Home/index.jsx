import Banner from "../../components/Banner";
import Services from "../../components/Services";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import BackToTop from "../../components/common/BackToTop";
import "./styles.css";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Services showButton={true} />
      <Projects />
      <Contact />
      <BackToTop />
    </>
  );
};

export default HomePage;
