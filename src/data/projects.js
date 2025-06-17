const projects = {
    sola: {
        slug: "sola",
        title: "Smart Time Tracking",
        shortTitle: "Smart Time Tracking",
        description: `Application mobile Flutter destinée à la gestion terrain : pointage, signalement, 
    synchronisation sécurisée, et prédiction intelligente.`,
        preview: "Suivi des opérations terrain avec IA de prédiction et synchronisation sécurisée.",
        image: "/images/image1.png",
        videoId: "ha0ZmyguVYI",
        highlights: [
            "Conception complète d'une app Flutter de suivi terrain (pointage, alertes)",
            "Intégration d'une IA de régression linéaire pour prédire l’heure d’arrivée des véhicules",
            "Synchronisation des données avec chiffrement AES-256 entre mobile et back-office",
            "Collaboration étroite avec l’équipe backend Java pour optimiser les flux de données",
            "Démonstration en ligne disponible sur YouTube"
        ],
        techs: ["Flutter", "Dart", "Firebase", "Java", "AES-256", "ML Regression"],
        github: "https://github.com/dylancodeverse/Smart-time-tracking",
    },
    "smart-time-tracking-backoffice": {
        slug: "smart-time-tracking-backoffice",
        title: "Smart Time Tracking – Backoffice",
        shortTitle: "STT Backoffice",
        description:
            "Interface d’administration web dédiée à la supervision des opérations terrain liées au Smart Time Tracking. Elle permet de gérer les anomalies, d’analyser les données, et d'automatiser les rapports.",
        preview:
            "Backoffice web complet pour la gestion des anomalies, rapports PDF/graphes, statistiques et automatisations liées aux opérations terrain.",
        image: "/images/image3.png", // à remplacer par une image représentative
        videoId: "ZgIAV0Qb8Nk", // si tu as une démo YouTube, sinon laisse vide
        highlights: [
            "Suivi des anomalies : pointages incohérents, absences, irrégularités de participation",
            "Rapports dynamiques : graphiques interactifs et génération de PDF téléchargeables",
            "Envoi automatique de rapports par email aux responsables",
            "Tableaux statistiques détaillés avec filtres avancés",
            "Interface admin intuitive et responsive en React + Tailwind",
            "Connexion sécurisée au backend Java avec synchronisation encryptée AES-256"
        ],
        techs: ["React", "Tailwind CSS", "Chart.js", "Node.js", "Spring Boot", "PostgreSQL"],
        github: "https://github.com/dylancodeverse/smart-time-tracking-backoffice", // ou lien privé
    },

};

export default projects;
