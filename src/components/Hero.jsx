import React from 'react'
import { motion } from 'framer-motion'
export default function Hero({t}){
  return(
    <section className="hero">
      <motion.div initial={{y:-50,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}}>
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
        <div>
          <a className="btn" href="/Portfolio/cv/malek-cv-en.pdf" target="_blank">{t.hero.ctaCv}</a>
          <a className="btn outline" href="#projects">{t.hero.ctaProjects}</a>
        </div>
      </motion.div>
    </section>
  )
}
