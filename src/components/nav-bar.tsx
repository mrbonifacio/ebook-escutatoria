// NavBar.tsx
import React from "react";
import { Home, Book, User } from "lucide-react";

interface NavBarProps {
    activeSection: string;
    scrollToSection: (id: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ activeSection, scrollToSection }) => {
    const sections = ["hero", "sobre", "autor"];
    const icons = [
        <Home key="hero" className="text-black" />,
        <Book key="sobre" className="text-black" />,
        <User key="autor" className="text-black" />
    ];

    return (
        <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 bg-transparent p-3 rounded-lg z-50">
            {sections.map((section, index) => (
                <button
                    key={section}
                    className={`p-2 rounded-full transition ${activeSection === section ? "border-2 border-white" : ""}`}
                    onClick={() => scrollToSection(section)}
                >
                    {icons[index]}
                </button>
            ))}
        </nav>
    );
};
