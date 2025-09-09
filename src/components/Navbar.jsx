import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, setLang } = useLanguage();

  return (
    <nav className="navbar">
      <div>
        <a href="#projects">{lang === "en" ? "Projects" : "Projets"}</a>
        <a href="#timeline">{lang === "en" ? "Timeline" : "Parcours"}</a>
        <a href="#contact">{lang === "en" ? "Contact" : "Contact"}</a>
      </div>

      <button
        className="btn outline"
        onClick={() => setLang(lang === "en" ? "fr" : "en")}
      >
        {lang === "en" ? "FR" : "EN"}
      </button>
    </nav>
  );
}
