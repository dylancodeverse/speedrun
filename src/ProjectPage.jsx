import { useState } from "react";
import { useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import projects from "./data/projects";


export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects[slug];
  const [isOpen, setIsOpen] = useState(false);

  if (!project) {
    return <div className="text-white p-10">Projet introuvable.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-black text-white font-sans px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Titre & description */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-pink-400">{project.title}</h1>
          <p className="text-lg text-gray-300">{project.description}</p>
        </div>

        {/* Miniature vidéo */}
        <div
          className="relative group cursor-pointer w-full h-60 sm:h-80 md:h-[400px] rounded-xl overflow-hidden border border-purple-600 shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={`https://img.youtube.com/vi/${project.videoId}/0.jpg`}
            alt="Thumbnail"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white text-lg bg-pink-500 px-4 py-2 rounded-full">
              Voir la démo
            </span>
          </div>
        </div>

        {/* Détails */}
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-purple-300 mb-2">Points forts</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {project.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-purple-300 mb-2">Stack utilisée</h2>
            <div className="flex flex-wrap gap-2 text-sm">
              {project.techs.map((tech, i) => (
                <span key={i} className="bg-purple-700 text-purple-100 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-purple-300 mb-2">Code source</h2>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Voir sur GitHub →
            </a>
          </section>
        </div>

        {/* Retour */}
        {/* <div className="text-center mt-10">
          <a
            href="/#projets"
            className="inline-block text-sm text-gray-400 hover:text-white underline transition-colors"
          >
            ← Retour à mes projets
          </a>
        </div> */}
      </div>

      {/* Lightbox video */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-5xl aspect-video"
            >
              <iframe
                src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
                className="w-full h-full rounded-xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-white text-xl bg-black/60 rounded-full px-3 py-1 hover:bg-black"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
