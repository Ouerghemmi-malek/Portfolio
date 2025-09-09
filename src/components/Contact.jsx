import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <section id="contact">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        {lang === "en" ? "Contact Me" : "Me Contacter"}
      </h2>

      <motion.form
        action="https://formspree.io/f/xdklyvao" 
        method="POST"
        className="contact-form"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <label>
          {lang === "en" ? "Your Name" : "Votre Nom"}
          <input type="text" name="name" required />
        </label>

        <label>
          {lang === "en" ? "Your Email" : "Votre Email"}
          <input type="email" name="email" required />
        </label>

        <label>
          {lang === "en" ? "Message" : "Message"}
          <textarea name="message" rows="5" required></textarea>
        </label>

        <motion.button
          type="submit"
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang === "en" ? "Send" : "Envoyer"}
        </motion.button>
      </motion.form>
    </section>
  );
}
