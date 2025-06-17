import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icônes

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: "profil", label: "Profil" },
    { id: "experiences", label: "Expériences" },
    { id: "education", label: "Éducation" },
    { id: "projets", label: "Projets" },
    { id: "competences", label: "Compétences" },
    { id: "langues", label: "Langues" },
    { id: "contact", label: "Contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black bg-opacity-70 backdrop-blur-md shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-white font-bold text-lg">DYLAN</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm md:text-base text-white font-medium">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-pink-400 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden bg-black bg-opacity-90 text-white px-4 pb-4 space-y-2 text-base font-medium">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setIsOpen(false)}
              className="block hover:text-pink-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
