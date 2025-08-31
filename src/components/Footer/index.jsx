import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import logoImg from "../../assets/img/PNG (MARCA DÁGUA)-06.png";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo e Descrição */}
          <div className="footer-brand">
            <img
              src={logoImg}
              alt="TB Design Residencial"
              className="footer-logo-img font-le-quarte"
            />
            <p className="footer-description">
              Transformando espaços e criando lares únicos com design inovador e
              funcionalidade inteligente.
            </p>
          </div>

          {/* Informações de Contato */}
          <div className="footer-contact">
            <h4 className="footer-title">Contato</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <span>(34) 99810-4644</span>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <span>contato.thalysonborges@hotmail.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>Uberlândia/MG</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="footer-social">
            <h4 className="footer-title">Redes Sociais</h4>
            <div className="social-links">
              <a
                href="https://www.instagram.com/thalysonborges"
                className="social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/tbdesignresidencial"
                className="social-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/thalyson-borges"
                className="social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 TB Design Residencial. Todos os direitos reservados.
          </p>
          <a
            className="footer-copyright"
            href="https://lucas-portfolio-sigma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Develop by Lucas Abreu
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
