import React from "react";
import { ArrowRight } from "lucide-react";
import "./style.css";
import { Link } from "react-router-dom";

const Contact = ({
  backgroundColor = "#EAEAE5",
  title = "Pronto para transformar seu espaço?",
}) => {
  return (
    <section className="contato-section" style={{ backgroundColor }}>
      <div className="contato-container">
        <div className="contato-content">
          <h2 className="contato-titulo font-le-quarte">{title}</h2>
          <div className="contato-texto">
            <p>
              Conversamos sobre suas ideias e como podemos torná-las realidade.
            </p>
            <p>Entre em contato e solicite um orçamento.</p>
          </div>
          <Link to="/contato">
            <button className="contato-button">
              Solicitar Orçamento Gratuito <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
