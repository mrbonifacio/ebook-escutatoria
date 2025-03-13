import { motion } from "framer-motion";
import { MotionButton } from "./button";

export function AboutBook({ paymentLink }: { paymentLink: string }) {
    return (
        <section
            id="sobre"
            className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-100 via-white to-blue-50 text-gray-900 px-6 py-16 relative overflow-hidden"
        >
            {/* Imagem flutuante de fundo */}
            <motion.img
                src="/assets/ebook.png"
                alt="Capa do Livro"
                className="absolute left-4 top-16 w-[30%] max-w-md -rotate-12 opacity-20 blur-sm"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 0.2, x: 0 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
            />

            {/* Imagem principal do livro */}
            <motion.img
                src="/assets/ebook.png"
                alt="Capa do Livro"
                className="w-48 h-72 rounded-lg shadow-2xl relative z-10 mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Título com destaque */}
            <motion.h2
                className="text-5xl font-extrabold text-blue-900 relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                O Guia Definitivo da <span className="text-blue-600">Escutatória</span>
            </motion.h2>

            {/* Descrição do livro */}
            <motion.p
                className="text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed text-gray-800 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                📘 <strong>"O Poder da Escutatória"</strong> é um guia prático que revela como a arte de ouvir pode transformar
                profundamente sua comunicação e relações. Aprenda técnicas eficazes para aprimorar a <strong>escuta ativa</strong> e se destacar
                em qualquer ambiente – do pessoal ao profissional.
            </motion.p>

            <motion.p
                className="text-lg mt-6 max-w-3xl mx-auto leading-relaxed text-gray-700 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                Este livro explora desde a superação de <strong>barreiras de comunicação</strong> até a aplicação da escuta em
                <strong>liderança, resolução de conflitos</strong> e <strong>atendimento ao cliente</strong>. Ideal para quem deseja se comunicar melhor,
                fortalecer conexões e desenvolver empatia.
            </motion.p>

            <motion.p
                className="text-lg mt-6 max-w-3xl mx-auto leading-relaxed text-gray-700 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                🚀 Seja você um líder, profissional ou alguém que busca melhorar suas relações, este livro oferece um roteiro prático
                para desenvolver a <strong>escuta consciente</strong> e desbloquear o poder da comunicação eficaz.
            </motion.p>

            {/* Botão de compra com animação */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-10 relative z-10"
            >
                <MotionButton href={paymentLink}>Garanta seu Ebook Agora!</MotionButton>
            </motion.div>
        </section>
    );
}
