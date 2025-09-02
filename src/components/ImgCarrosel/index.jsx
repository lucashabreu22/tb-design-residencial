import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./style.css";

const ImgCarrosel = ({
  images,
  autoPlay = false,
  interval = 3000,
  variant = "default",
  objectFit = "cover",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // Decide se deve mostrar carrossel
  const shouldShowCarousel = images.length > 1; // Sempre mostra se há múltiplas imagens

  // Navegação
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // AutoPlay
  useEffect(() => {
    if (!autoPlay || !shouldShowCarousel) return;

    intervalRef.current = setInterval(goToNext, interval);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, interval, shouldShowCarousel, goToNext]);

  // Cleanup global
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Renderização condicional simplificada
  const containerClasses = `carousel-container ${
    variant === "project" ? "carousel-container--project" : ""
  }`;

  // Se não deve mostrar carrossel, renderiza apenas a primeira imagem
  if (!shouldShowCarousel) {
    return (
      <div ref={containerRef} className={containerClasses}>
        <div className="carousel-wrapper carousel-wrapper--static">
          <div className="carousel-images">
            <div className="carousel-image">
              <img
                src={images[0]?.src}
                alt={images[0]?.alt || "Imagem"}
                style={{ objectFit }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Carrossel completo
  return (
    <div ref={containerRef} className={containerClasses}>
      <div className="carousel-wrapper">
        <button
          className="carousel-button carousel-button--prev"
          onClick={goToPrevious}
        >
          <ChevronLeft size={18} />
        </button>

        <div
          className="carousel-images"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-image">
              <img
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
                style={{ objectFit }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-button carousel-button--next"
          onClick={goToNext}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImgCarrosel;
