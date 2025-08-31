import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import "./style.css";

const BackToTop = ({ threshold = 400 }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`back-to-top ${showBackToTop ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default BackToTop;
