import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="hero" style={{ textAlign: "center", padding: "4rem 2rem" }}>
      {/* Nom */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Mohamed Malek Ouerghemmi
      </motion.h1>

{/* Titre */}
<motion.h2
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: "#f8fafc" }}
>
  {lang === "en"
    ? "Electromechanical Engineer – IoT, Industrial Automation & Special Machine Design"
    : "Ingénieur Électromécanique – IoT, Automatisation Industrielle & Machines Spéciales"}
</motion.h2>

{/* Pitch amélioré */}
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  style={{
    maxWidth: "650px",
    margin: "auto",
    marginBottom: "2rem",
    lineHeight: "1.8",
    fontSize: "1.05rem",
    textAlign: "left"
  }}
>
  {lang === "en" ? (
    <>
      Specialist in <strong>custom machine design</strong>, IoT supervision, and industrial process optimization.<br />
      Over <strong>10 years of experience</strong> in predictive maintenance and Lean Manufacturing.<br />
      Delivered <span style={{ color: "#25eb99ff", fontWeight: "bold" }}>20% downtime reduction</span> with IoT solutions.<br />
      Achieved <span style={{ color: "#25eb99ff", fontWeight: "bold" }}>15% productivity gains</span> through tailored machine design.<br />
      International project experience (Italy) with expertise in CAD (SolidWorks), SCADA, and Industry 4.0.
    </>
  ) : (
    <>
      Expert en <strong>conception de machines spéciales</strong>, supervision IoT et industrialisation.<br />
      Plus de <strong>10 ans d’expérience</strong> en maintenance prédictive et Lean Manufacturing.<br />
      Réduction de <span style={{ color: "#25eb99ff", fontWeight: "bold" }}>20 % des arrêts machines</span> grâce à des systèmes IoT sur mesure.<br />
      Amélioration de <span style={{ color: "#25eb99ff", fontWeight: "bold" }}>15 % du rendement</span> via la conception de solutions adaptées.<br />
      Expérience internationale (Italie) avec maîtrise de la CAO 3D (SolidWorks), SCADA et solutions Industrie 4.0.
    </>
  )}
</motion.p>



      {/* CTA Buttons */}
      <div style={{ marginBottom: "2rem" }}>
        <motion.a
          href={lang === "en" ? "/cv-en.pdf" : "/cv-fr.pdf"}
          className="btn outline"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang === "en" ? "Download CV" : "Télécharger CV"}
        </motion.a>

        <motion.a
          href="#projects"
          className="btn"
          style={{ marginLeft: "1rem" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang === "en" ? "View Projects" : "Voir Projets"}
        </motion.a>
      </div>

      {/* Liens directs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", fontSize: "1.5rem" }}>
        <a href="https://www.linkedin.com/in/mohamed-malek-ouerghemmi/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin color="#2563eb" />
        </a>
        <a href="https://github.com/ouerghemmi-malek" target="_blank" rel="noopener noreferrer">
          <FaGithub color="#0f172a" />
        </a>
        <a href="mailto:ouerghemi.malek@gmail.com">
          <FaEnvelope color="#f59e0b" />
        </a>
        <a href={lang === "en" ? "/cv-en.pdf" : "/cv-fr.pdf"} target="_blank" rel="noopener noreferrer">
          <FaFilePdf color="#10b981" />
        </a>
      </div>
    </section>
  );
}
