import { motion } from "framer-motion";
import React from "react";

interface MotionButtonProps {
    href: string;
    children: React.ReactNode;
    target?: "_blank" | "_self" | "_parent" | "_top";
    rel?: string;
    className?: string;
}

export const MotionButton: React.FC<MotionButtonProps> = ({
    href,
    children,
    target = "_blank",
    rel = "noopener noreferrer",
    className = "",
}) => {
    return (
        <motion.a
            href={href}
            target={target}
            rel={rel}
            className={`inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg relative z-10 m-4 ${className}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {children}
        </motion.a>
    );
};
