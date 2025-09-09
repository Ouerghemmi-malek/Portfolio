import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

import timelineEN from "../data/timeline.en.json";
import timelineFR from "../data/timeline.fr.json";

// Icônes basées sur le titre (peuvent être remplacées par Heroicons/Lucide)
const icons = {
  freelance: "💻",
  manager: "🛠️",
  design: "📐",
  technician: "🏭",
  maintenance: "🔧",
  aircraft: "✈️"
};

export default function Timeline() {
  const { lang } = useLanguage();
  const timeline = lang === "en" ? timelineEN : timelineFR;

  return (
    <section id="timeline">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        {lang === "en" ? "Experience Timeline" : "Parcours Professionnel"}
      </h2>

      <div className="timeline">
        {timeline.map((item, i) => {
          // Choix de l’icône en fonction du titre
          let icon = "📌";
          if (item.title.toLowerCase().includes("freelance")) icon = icons.freelance;
          else if (item.title.toLowerCase().includes("manager") || item.title.toLowerCase().includes("projets")) icon = icons.manager;
          else if (item.title.toLowerCase().includes("design") || item.title.toLowerCase().includes("conception")) icon = icons.design;
          else if (item.title.toLowerCase().includes("technicien") || item.title.toLowerCase().includes("technician")) icon = icons.technician;
          else if (item.title.toLowerCase().includes("maintenance")) icon = icons.maintenance;
          else if (item.title.toLowerCase().includes("aéronef") || item.title.toLowerCase().includes("aircraft")) icon = icons.aircraft;

          return (
            <motion.div
              key={i}
              className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-content">
                <span className="icon">{icon}</span>
                <h3>{item.title}</h3>
                <span className="date">{item.date}</span>
                <span className="location">{item.location}</span>
                <p>{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
