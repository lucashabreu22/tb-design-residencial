import "./style.css";

const SubPageHeader = ({ title, subTitle, backgroundImage }) => {
  return (
    <section className="sub-header-section">
      {/* Gradiente overlay escuro */}
      <div className="header-gradient-overlay"></div>

      {/* Imagem de fundo (opcional) */}
      {backgroundImage && (
        <div
          className="header-background-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      )}

      <div className="header-title-cointainer">
        <div className="title-header-text">
          <h1 className="projeto-title font-le-quarte">{title}</h1>
          <p>{subTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default SubPageHeader;
