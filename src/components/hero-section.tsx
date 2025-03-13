import { motion } from "framer-motion";
import { MotionButton } from "./button";
import ebookImg from "../assets/ebook.png"

export function HeroSection({ paymentLink }: { paymentLink: string }) {
    return (
        <section
            id="hero"
            className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden px-6"
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-4 left-6 flex items-center space-x-8 text-base"
            >
                <a
                    href="mailto:aurvimpartners@gmail.com"
                    className="text-white font-semibold hover:underline"
                >
                    aurvimpartners@gmail.com
                </a>
                <a
                    href="https://wa.me/5516988514453"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:underline"
                >
                    +55 16 98851-4453
                </a>
            </motion.div>

            {/* Imagem do livro em diagonal de fundo */}
            <motion.img
                src={ebookImg}
                alt="Capa do Livro"
                className="absolute right-4 bottom-0 w-[32%] max-w-2xl rotate-12 opacity-30 blur-sm"
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 0.3, x: 0 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
            />

            {/* Título principal com animação */}
            <motion.h1
                className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight relative z-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Desvende o <span className="text-cyan-400">Poder da Escutatória</span>
            </motion.h1>

            {/* Descrição envolvente */}
            <motion.p
                className="text-lg md:text-xl mt-4 max-w-2xl leading-relaxed relative z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
                Aprenda a escutar de forma ativa e transforme suas conexões.
                Este livro é o seu guia para desenvolver a empatia, fortalecer
                relações e se destacar no ambiente pessoal e profissional.
            </motion.p>

            {/* Botão de compra animado */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="mt-8 relative z-10"
            >
                <MotionButton href={paymentLink}>Garanta o Seu Agora</MotionButton>
            </motion.div>
        </section>
    );
}
