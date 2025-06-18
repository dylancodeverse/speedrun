import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "./Header";
import { Link } from "react-router-dom";
import projects from "./data/projects";

export default function Portfolio() {
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "50%"]);
    const textY = useTransform(scrollY, [0, 1000], ["0%", "-20%"]);

    useEffect(() => {
        document.title = "Dylan Ratianarivo - Portfolio";
    }, []);

    return (
        <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden scroll-smooth">
            {/* Navigation fixe */}
            <Header />

            {/* Fond animé */}
            <motion.div
                className="fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-purple-900 via-black to-indigo-900 pointer-events-none"
                style={{
                    y: backgroundY,
                    opacity: useTransform(scrollY, [0, 1000, 1600], [0.6, 0.6, 0]),
                    translateY: useTransform(scrollY, [1200, 1800], ["0%", "100%"]),
                }}
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
            <div className="relative z-20 max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-24" id="profil">
                {/* Header */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    >

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

                {/* Profil */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-semibold text-purple-300 mb-2">Profil</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Développeur Full Stack spécialisé en Flutter et Java, j’interviens sur l’ensemble du cycle de vie
                        applicatif — de l’architecture backend à l’interface mobile. Je m’engage dans des projets à haute valeur
                        ajoutée technique et orientés utilisateur.
                    </p>
                </motion.section>
                <div className="mt-6 flex justify-center">
                    <a
                        href="/CV_Dylan_Ratianarivo.pdf"
                        download
                        className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-medium transition"
                    >
                        Télécharger mon CV
                    </a>
                </div>


                {/* Expériences */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    id="experiences" className="scroll-mt-28"
                >
                    <h2 className="text-2xl font-semibold text-purple-300 mb-4" >Expériences Professionnelles</h2>
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
                </motion.section>


                {/* Éducation */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    id="education" className="scroll-mt-28"
                >                
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
                </motion.section>                



                {/* Projets */}
                <section id="projets" className="relative z-20 scroll-mt-28">
                    <h2 className="text-3xl font-bold text-center text-purple-300 mb-10">Mes Projets Récents</h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {Object.values(projects).map((project, i) => (
                            <Link
                                to={`/projets/${project.slug}`}
                            >
                                <motion.div
                                    key={project.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-br from-purple-800/60 to-indigo-900/70 p-5 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="overflow-hidden rounded-xl mb-4">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-40 object-cover rounded-xl border border-purple-500"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-pink-400">{project.shortTitle}</h3>
                                    <p className="text-sm text-gray-300 mt-2">{project.preview}</p>
                                    <Link
                                        to={`/projets/${project.slug}`}
                                        className="inline-block mt-4 text-sm text-pink-400 hover:text-pink-300 underline"
                                    >
                                        Voir le projet →
                                    </Link>
                                </motion.div>
                            </Link>

                        ))}
                        {/* Carte GitHub statique */}
                        <motion.a
                            href="https://github.com/dylancodeverse"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: projects.length * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-purple-800/60 to-indigo-900/70 p-5 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
                        >
                            <div className="overflow-hidden rounded-xl mb-4">
                                <img
                                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                    alt="GitHub"
                                    className="w-full h-40 object-contain bg-black rounded-xl border border-purple-500 p-4"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-pink-400">Voir plus sur GitHub</h3>
                            <p className="text-sm text-gray-300 mt-2">Découvre d'autres projets, forks et contributions sur mon dépôt GitHub.</p>
                            <span className="inline-block mt-4 text-sm text-pink-400 hover:text-pink-300 underline">
                                github.com/dylancodeverse →
                            </span>
                        </motion.a>
                    </div>
                </section>

                {/* Compétences */}
                <section id="competences" className="scroll-mt-28">
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
                <section id="langues" className="scroll-mt-28">
                    <h2 className="text-2xl font-semibold text-purple-300 mb-4">Langues</h2>
                    <ul className="list-disc list-inside text-gray-300">
                        <li>Malagasy</li>
                        <li>Français (C1)</li>
                        <li>Anglais (B2)</li>
                        <li>Allemand (B1)</li>
                    </ul>
                </section>
                <section id="contact" className="bg-black py-20 text-center px-6">
                    <h2 className="text-3xl font-bold text-purple-300 mb-12">Me Contacter</h2>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-left items-start">

                        {/* WhatsApp Section */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-green-400">Contact rapide</h3>
                            <p className="text-gray-400">
                                Tu peux me contacter directement via WhatsApp pour une réponse plus rapide :
                            </p>

                            <a
                                href="https://wa.me/261344202702"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg text-lg transition-transform transform hover:scale-105"
                            >
                                <svg
                                    className="w-6 h-6 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M380.9 97.1C339.1 55.3 282.5 32 221.8 32 99.4 32 0 131.5 0 253.7c0 45 11.7 88.3 34.1 126.7L0 480l102.6-33.6c36.5 19.9 77.4 30.3 119.2 30.3h.1c122.3 0 221.9-99.4 221.9-221.8 0-60.6-23.3-117.2-65.1-158.8zM221.8 438.3c-35.3 0-69.8-9.5-99.9-27.5l-7.1-4.2-60.8 19.9 20.2-59-4.6-7.3c-20.6-32.7-31.5-70.5-31.5-109.6 0-110.2 89.6-199.7 199.8-199.7 53.3 0 103.4 20.8 141.1 58.6 37.7 37.7 58.5 87.8 58.5 141.1 0 110.1-89.5 199.7-199.7 199.7zm117.3-138.1c-6.4-3.2-38-18.7-43.9-20.8-5.9-2.1-10.2-3.2-14.5 3.2-4.3 6.4-16.7 20.8-20.5 25.1-3.8 4.3-7.5 4.8-13.9 1.6-6.4-3.2-27.1-10-51.6-31.8-19-16.9-31.8-37.9-35.5-44.3-3.7-6.4-.4-9.9 2.8-13.1 2.9-2.9 6.4-7.5 9.6-11.2 3.2-3.8 4.3-6.4 6.4-10.7 2.1-4.3 1.1-8-0.5-11.2-1.6-3.2-14.5-34.9-19.8-47.7-5.2-12.6-10.5-10.9-14.5-11.1h-12.4c-4.3 0-11.2 1.6-17.1 8-5.9 6.4-22.4 21.9-22.4 53.5s22.9 62.2 26.1 66.5c3.2 4.3 44.8 68.3 108.7 95.8 15.2 6.6 27.1 10.5 36.3 13.4 15.2 4.8 29 4.1 39.9 2.5 12.2-1.8 38-15.5 43.4-30.5 5.3-15.1 5.3-28 3.7-30.5-1.7-2.3-5.9-3.8-12.3-6.9z" />
                                </svg>
                                WhatsApp Me
                            </a>
                        </div>

                        {/* Formulaire Email */}
                        <form
                            action="https://formspree.io/f/xblykjjr"
                            method="POST"
                            className="grid gap-6"
                        >
                            <p className="text-gray-400">
                                Ou remplis ce formulaire pour m’envoyer un e-mail directement à :{" "}
                                <span className="text-purple-400 font-medium">ratianarivodylan@gmail.com</span>
                            </p>

                            <input
                                type="text"
                                name="name"
                                placeholder="Votre nom"
                                required
                                className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Votre email"
                                required
                                className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500"
                            />
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Votre message"
                                required
                                className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition duration-300"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </section>

            </div>
        </div>
    );
}
