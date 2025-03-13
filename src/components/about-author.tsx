import { motion } from "framer-motion";
import authorsImg from "../assets/authors.jpg"

export function AboutAuthor() {
    return (
        <section
            id="autor"
            className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-gray-100 via-white to-gray-200 text-gray-900 px-6 py-16 relative overflow-hidden"
        >
            {/* Imagem dos autores */}
            <motion.img
                src={authorsImg}
                alt="Foto dos autores"
                className="w-48 h-32 sm:w-72 sm:h-52 rounded-xl shadow-2xl relative z-10 mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Título */}
            <motion.h2
                className="text-4xl font-extrabold text-gray-800 relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                Sobre os Autores
            </motion.h2>

            {/* Descrição do Vinicius */}
            <motion.p
                className="text-lg mt-6 max-w-3xl mx-auto leading-relaxed text-gray-700 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                👨‍💻 <strong>Vinicius Bonifacio Pereira</strong> é desenvolvedor de sistemas e apaixonado por entender as nuances da comunicação humana.
                Durante sua jornada profissional e pessoal, sempre ouviu das pessoas ao seu redor que sua calma e paciência em escutar
                eram características acolhedoras e diferenciadas.
            </motion.p>

            <motion.p
                className="text-lg mt-6 max-w-3xl mx-auto leading-relaxed text-gray-700 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                Sua inspiração para escrever <strong>"O Poder da Escutatória"</strong> surgiu após um treinamento onde ouviu, pela primeira vez, esse termo que
                abriu sua mente para a importância do ato de escutar. Motivado a compartilhar essa habilidade subestimada, Vinicius
                desenvolveu este livro para ajudar outras pessoas a aprimorar a escuta ativa e fortalecer suas conexões interpessoais.
            </motion.p>

            {/* Descrição do Mauro Vinicius */}
            <motion.p
                className="text-lg mt-6 max-w-3xl mx-auto leading-relaxed text-gray-700 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                🤝 <strong>Mauro Vinicius</strong> é parceiro no desenvolvimento do livro e coautor deste projeto. Com uma visão complementar,
                ele trouxe insights valiosos para aprofundar a abordagem prática da escuta ativa, colaborando diretamente para tornar o conteúdo
                acessível e transformador para os leitores.
            </motion.p>

            <motion.p
                className="text-lg mt-6 max-w-3xl mx-auto leading-relaxed text-gray-700 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                Juntos, Vinicius e Mauro acreditam que a escuta consciente não apenas transforma as relações pessoais e profissionais,
                mas também cria um ambiente de maior empatia e compreensão em um mundo onde ser ouvido é, muitas vezes, um privilégio.
            </motion.p>

            {/* Rodapé */}
            <motion.footer
                className="mt-12 text-sm text-gray-600 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                © {new Date().getFullYear()} Todos os direitos reservados a Vinicius Bonifacio Pereira e Mauro Vinicius.
            </motion.footer>
        </section>
    );
}
