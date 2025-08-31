import SubPageHeader from "../../components/SubPageHeader";
import ServicesGrid from "../../components/ServicesGrid";
import ProcessStepsGrid from "../../components/ProcessStepsGrid";
import ReasonsGrid from "../../components/ReasonsGrid";
import Contato from "../../components/Contato";
import BackToTop from "../../components/common/BackToTop";

import { useServices } from "../../hooks/useServices";
import { useProcessSteps } from "../../hooks/useProcessSteps";
import { useReasons } from "../../hooks/useReasons";

import servicePageBg from "../../assets/img/servicePageBg.png";

import "./style.css";

const ServicoPage = () => {
  const { servicos } = useServices();
  const { processSteps } = useProcessSteps();
  const { reasons } = useReasons();

  return (
    <>
      <SubPageHeader
        title={"Serviços"}
        subTitle={
          "Oferecemos soluções completas em design, do conceito inicial à entrega do projeto final do seus sonhos."
        }
        backgroundImage={servicePageBg}
      />

      <section className="servicos-page-content">
        <ServicesGrid servicos={servicos} variant="page" />
      </section>

      <section className="information-text-section">
        <div className="information-text" id="como-trabalhamos">
          <h1 className="font-le-quarte ">Como trabalhamos</h1>
          <p>
            Nosso processo é pensado para garantir que cada detalhe do seu
            projeto seja cuidadosamente planejado e executado.
          </p>
        </div>

        <ProcessStepsGrid processSteps={processSteps} />
      </section>

      <section className="reason-text-section">
        <div className="information-text">
          <h1 className="font-le-quarte ">Por que escolher a TB Design?</h1>
        </div>

        <ReasonsGrid reasons={reasons} />
      </section>

      <Contato backgroundColor="white" />
      <BackToTop />
    </>
  );
};

export default ServicoPage;
