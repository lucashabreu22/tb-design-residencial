import "./style.css";

import { useState } from "react";

import SubPageHeader from "../../components/SubPageHeader";
import ContactComponent from "../../components/Contact";
import BackToTop from "../../components/common/BackToTop";

// Images
import contactImgBg from "../../assets/img/contactImgBg.png";
import pngContactImg from "../../assets/img/PNG (MARCA DÁGUA)-15 (Contact).png";
import wppIcon from "../../assets/img/whatsapp-logo.svg";
import igIcon from "../../assets/img/instagram-logo.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário, como uma chamada API
    console.log("Form data submitted:", formData);
  };

  const handleWppClick = () => {
    if (!formData.name || formData.name.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        name: true,
      }));

      // Remover erro automaticamente após 5 segundos
      setTimeout(() => {
        setErrors((prev) => ({
          ...prev,
          name: false,
        }));
      }, 5000);

      return; // Para a execução se nome não estiver preenchido
    }

    const messageWpp = `Olá, tudo bem?
Meu nome é ${formData.name} e estou entrando em contato através do seu site.
${
  formData.message ||
  `Tenho uma ideia de projeto para a minha casa e gostaria de saber os proximos passos.`
}`;

    const wppUrl = `https://wa.me/351934099776?text=${encodeURIComponent(
      messageWpp
    )}`;
    window.open(wppUrl, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <SubPageHeader
        title={"Fale Conosco"}
        subTitle={
          "Estamos prontos para transformar a sua casa. Entre em contato e nos conte a sua ideia."
        }
        backgroundImage={contactImgBg}
      />

      <section className="orcamento-container">
        <div className="orcamento-social">
          <img src={pngContactImg} alt="tbDesignLogo" />
        </div>
        <div className="orcamento-form">
          <form id="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? "input-error" : ""}
            />

            {/* <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            /> */}

            {/* <label htmlFor="phone">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            /> */}

            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Como podemos te ajudar?"
              required
            ></textarea>
          </form>

          <div className="buttons-container">
            {/* <button
              type="submit"
              form="contact-form"
              className="submit-button"
              aria-label="Enviar pedido de orçamento"
            >
              Enviar Pedido de Orçamento
            </button> */}

            <button
              className="wpp-button"
              onClick={handleWppClick}
              aria-label="Iniciar conversa no WhatsApp"
            >
              <img src={wppIcon} alt="wpp-logo" className="wpp-logo" />
              WhatsApp
            </button>

            <div className="divider">OU</div>

            <button
              className="wpp-button"
              aria-label="Instagram"
              id="ig-button"
            >
              <img src={igIcon} alt="ig-logo" className="wpp-logo" />
              <a
                href="https://www.instagram.com/tbdesignresidencial"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
