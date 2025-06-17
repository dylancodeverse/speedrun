// src/404.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-6">
      <h1 className="text-6xl font-bold text-pink-500 mb-4">404</h1>
      <p className="text-xl mb-6">Oups... Cette page n'existe pas.</p>
      <Link
        to="/"
        className="text-pink-400 hover:text-pink-300 underline text-sm"
      >
        ← Retour à l'accueil
      </Link>
    </div>
  );
}
