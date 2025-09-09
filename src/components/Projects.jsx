import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import projectsEN from "../data/projects.en.json";
import projectsFR from "../data/projects.fr.json";

export default function Projects() {
  const { lang } = useLanguage();
  const projects = lang === "en" ? projectsEN : projectsFR;

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        {lang === "en" ? "Projects" : "Projets"}
      </h2>

      <div className="grid-container">
        {projects.map((proj, i) => (
          <div key={i}>
            {/* Hero Image */}
            <motion.div
              className="project-card"
              onClick={() => setSelectedProject(proj)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={proj.hero} alt={proj.title} />
              <div className="overlay">
                <h3>{proj.title}</h3>
              </div>
            </motion.div>

            {/* Rectangle résumé */}
            <motion.div
              className="project-summary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="problem">
                <strong>{lang === "en" ? "Problem" : "Problème"}:</strong>{" "}
                {proj.problem}
              </p>
              <p className="solution">
                <strong>{lang === "en" ? "Solution" : "Solution"}:</strong>{" "}
                {proj.solution}
              </p>
              <p className="result">
                <strong>{lang === "en" ? "Result" : "Résultat"}:</strong>{" "}
                {proj.result}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}
          >
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                fontSize: "1.5rem",
                cursor: "pointer",
                border: "none",
                background: "none"
              }}
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            {/* Texte gauche */}
            <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.short}</p>

              <div
  className="project-details"
  style={{ marginTop: "1rem", lineHeight: "1.8", fontSize: "1.05rem", textAlign: "left" }}
>
  <h4 style={{ color: "#dc2626", marginBottom: "0.5rem" }}>
    {lang === "en" ? "Problem" : "Problème"}
  </h4>
  <p style={{ marginBottom: "1rem" }}>{selectedProject.problem}</p>

  <h4 style={{ color: "#2563eb", marginBottom: "0.5rem" }}>
    {lang === "en" ? "Solution" : "Solution"}
  </h4>
  <p style={{ marginBottom: "1rem" }}>{selectedProject.solution}</p>

  <h4 style={{ color: "#10b981", marginBottom: "0.5rem" }}>
    {lang === "en" ? "Result" : "Résultat"}
  </h4>
  <p>{selectedProject.result}</p>
</div>
            </div>

            {/* Images droite */}
            <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                style={{ borderRadius: "12px", overflow: "hidden" }}
              >
                {selectedProject.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="project-image-wrapper">
                      <img src={img} alt="" className="project-image" />
                    </div> 
              
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
