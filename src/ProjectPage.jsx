import { useParams } from "react-router-dom";

const projectData = {
  "mybudget": {
    title: "MyBudget",
    description: "Application mobile de gestion budgétaire personnelle en Flutter.",
    videoId: "ha0ZmyguVYI",
    highlights: [
      "Ajout de dépenses/revenus avec catégorisation",
      "Stockage cloud avec Firebase (auth, Firestore, Storage)",
      "Interface responsive et animations fluides",
      "Visualisation graphique des données budgétaires",
    ],
    techs: ["Flutter", "Firebase", "Provider", "Chart.js", "Responsive UI"],
    github: "https://github.com/dylancodeverse/mybudget",
  },
  "portfolio-3d": {
    title: "Portfolio 3D",
    description: "Expérience immersive en 3D pour présenter mes compétences et projets.",
    videoId: "dQw4w9WgXcQ",
    highlights: [
      "Utilisation de React Three Fiber pour les scènes 3D",
      "Navigation fluide avec camera controls",
      "Animations GSAP synchronisées",
      "Responsive desktop & mobile",
    ],
    techs: ["React", "Three.js", "GSAP", "Framer Motion"],
    github: "https://github.com/dylancodeverse/portfolio-3d",
  },
  "mini-erp-java": {
    title: "Mini ERP Java",
    description: "Backend ERP modulaire pour la gestion d’inventaire, utilisateurs et statistiques.",
    videoId: "tgbNymZ7vqY",
    highlights: [
      "Architecture n-tiers avec Spring Boot",
      "Modules découplés : stock, utilisateurs, logs",
      "Gestion des droits par rôles",
      "Intégration avec base PostgreSQL",
    ],
    techs: ["Java", "Spring Boot", "PostgreSQL", "JPA", "Swagger"],
    github: "https://github.com/dylancodeverse/mini-erp",
  },
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projectData[slug];

  if (!project) {
    return <div className="text-white p-10">Projet introuvable.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-black text-white font-sans px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Titre */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-pink-400">{project.title}</h1>
          <p className="text-lg text-gray-300">{project.description}</p>
        </div>

        {/* Vidéo */}
        <div className="relative w-full rounded-xl overflow-hidden border border-purple-600 shadow-lg" style={{ paddingTop: '56.25%' }}>
        <iframe
            src={`https://www.youtube.com/embed/${project.videoId}`}
            title="Présentation vidéo du projet"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
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
        <div className="text-center mt-10">
          <a
            href="/#projets"
            className="inline-block text-sm text-gray-400 hover:text-white underline transition-colors"
          >
            ← Retour à mes projets
          </a>
        </div>
      </div>
    </div>
  );
}
