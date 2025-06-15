import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Portfolio() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "50%"]);
  const textY = useTransform(scrollY, [0, 1000], ["0%", "-20%"]);

  useEffect(() => {
    document.title = "Dylan Ratianarivo - Portfolio";
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Fond animé */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-purple-900 via-black to-indigo-900 opacity-60"
        style={{ y: backgroundY }}
      />

      {/* Particules décoratives */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 py-20 space-y-24">
        {/* Header */}
        <motion.div style={{ y: textY }} className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            DYLAN RATIANARIVO
          </h1>
          <p className="text-xl md:text-2xl mt-2 text-gray-300">
            Développeur Full Stack – Mobile (Flutter) & Backend (Java)
          </p>
          <p className="text-sm mt-4 text-gray-400">
            Antananarivo, Madagascar · ratianarivodylan@gmail.com · +261 34 42 027 02 ·{" "}
            <a href="https://github.com/dylancodeverse" className="text-pink-400 underline" target="_blank">
              GitHub
            </a>
          </p>
        </motion.div>

        {/* Résumé */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-2">Profil</h2>
          <p className="text-gray-300 leading-relaxed">
            Développeur Full Stack spécialisé en Flutter et Java, j’interviens sur l’ensemble du cycle de vie
            applicatif — de l’architecture backend à l’interface mobile. Je m’engage dans des projets à haute valeur
            ajoutée technique et orientés utilisateur.
          </p>
        </section>

        {/* Expériences */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Expériences Professionnelles</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-pink-400">Développeur d’application mobile Flutter</h3>
              <p className="text-sm text-gray-400">Coopérative Solà · Full remote · Nov 2024 – Avr 2025</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Développement complet d'une application Flutter pour opérations terrain</li>
                <li>Prédiction d'heure d’arrivée via modèle IA (régression linéaire)</li>
                <li>Synchronisation sécurisée AES-256 entre mobile et backoffice</li>
                <li>Collaboration backend Java pour optimisation des échanges</li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=ha0ZmyguVYI"
                    target="_blank"
                    className="underline text-blue-400"
                  >
                    Démo sur YouTube
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-pink-400">Stage développeur Java Spring Boot</h3>
              <p className="text-sm text-gray-400">Ministère des Mines · Antananarivo · Août 2024 – Oct 2024</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Digitalisation de 3 modules métier : stock, statistiques, anomalies</li>
                <li>Architecture n-tiers en Spring Boot</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Éducation */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Éducation</h2>
          <div className="space-y-2 text-gray-300">
            <div>
              <strong>Licence en Informatique – Développement d’Applications</strong>
              <p className="text-sm">IT University, Andoharanofotsy · Oct 2024</p>
            </div>
            <div>
              <strong>Baccalauréat Série C</strong>
              <p className="text-sm">Saint Michel Amparibe · 2009 – 2021</p>
            </div>
          </div>
        </section>

        {/* Compétences */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Compétences Techniques</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              "Flutter",
              "Java / Spring Boot",
              "React",
              "REST API",
              "GitHub",
              "Analyse de données",
              "SCRUM",
              "Modélisation IA",
            ].map((skill, i) => (
              <span key={i} className="bg-purple-700 text-purple-100 px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Langues */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Langues</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Malagasy</li>
            <li>Français (C1)</li>
            <li>Anglais (B2)</li>
            <li>Allemand (B1)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
