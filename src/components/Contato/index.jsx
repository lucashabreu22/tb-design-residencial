import React from "react";
import { ArrowRight } from "lucide-react";
import "./style.css";

const Contato = ({
  backgroundColor = "#EAEAE5",
  titulo = "Pronto para transformar seu espaço?",
}) => {
  return (
    <section className="contato-section" style={{ backgroundColor }}>
      <div className="contato-container">
        <div className="contato-content">
          <h2 className="contato-titulo font-le-quarte">{titulo}</h2>
          <div className="contato-texto">
            <p>
              Vamos conversar sobre suas ideias e como podemos torná-las
              realidade.
            </p>
            <p>Entre em contato e solicite um orçamento.</p>
          </div>
          <button className="contato-button">
            Solicitar Orçamento Gratuito <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contato;
