import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Book, User } from "lucide-react"

export function App() {
  const paymentLink = "https://seulinkdepagamento.com"; // Link de pagamento
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
      {/* Sidebar Minimalista */}
      <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 bg-white/80 backdrop-blur-lg p-3 rounded-lg shadow-lg">
        {sections.map((section, index) => {
          const icons = [<Home key="hero" />, <Book key="sobre" />, <User key="autor" />];
          return (
            <button
              key={section}
              className={`p-2 rounded-full transition ${activeSection === section ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              onClick={() => scrollToSection(section)}
            >
              {icons[index]}
            </button>
          );
        })}
      </nav>

      {/* Conteúdo Principal */}
      <div className="w-full">
        {/* Hero Section */}
        <section id="hero" className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <motion.img
            src="/ebook-cover.jpg"
            alt="Capa do Livro"
            className="w-64 h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <h1 className="text-4xl font-bold mt-6">Título do Livro Digital</h1>
          <p className="text-lg mt-2 max-w-xl">
            Descubra insights valiosos sobre [tema do livro] e transforme seu conhecimento.
          </p>
          <motion.a
            href={paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Comprar Agora
          </motion.a>
        </section>

        {/* Sobre o Livro */}
        <section id="sobre" className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-white text-gray-900 px-6">
          <h2 className="text-3xl font-semibold">Sobre o Livro</h2>
          <p className="text-gray-700 mt-4 max-w-2xl">
            Este livro aborda [tópico principal], fornecendo estratégias práticas para [benefício principal].
            Se você deseja aprender mais sobre [tema], este eBook é perfeito para você!
          </p>
        </section>

        {/* Sobre o Autor */}
        <section id="autor" className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-gray-200 text-gray-900 px-6">
          <img
            src="/author.jpg"
            alt="Foto do Autor"
            className="w-32 h-32 rounded-full shadow-lg"
          />
          <h2 className="text-2xl font-semibold mt-4">Nome do Autor</h2>
          <p className="text-gray-700 mt-2 max-w-md">
            [Nome do autor] é especialista em [área de atuação] e escreveu este livro para ajudar
            as pessoas a aprenderem mais sobre [tema].
          </p>
        </section>
      </div>
    </div>
  );
}
