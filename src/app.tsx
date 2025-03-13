import { useState, useEffect } from "react";
import { HeroSection } from "./components/hero-section";
import { AboutBook } from "./components/about-book";
import { AboutAuthor } from "./components/about-author";
import { NavBar } from "./components/nav-bar";

export function App() {
  const paymentLink = "https://mpago.la/1fsCwgh"; // Link de pagamento
  const sections = ["hero", "sobre", "autor"];
  const [activeSection, setActiveSection] = useState("");

  // Função para rolar suavemente até a seção correspondente
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };

  // Detectar qual seção está visível
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - window.innerHeight / 3;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex">
      <NavBar activeSection={activeSection} scrollToSection={scrollToSection} /> {/* Usando o componente NavBar */}

      {/* Conteúdo Principal */}
      <div className="w-full">
        <HeroSection paymentLink={paymentLink} />
        <AboutBook paymentLink={paymentLink} />
        <AboutAuthor />
      </div>
    </div>
  );
}
