import React from 'react'
import { motion } from 'framer-motion'
import data from '../data/timeline.json'
export default function Timeline({t}){
  return(
    <section id="experience">
      <h2>{t.timeline.title}</h2>
      {data.map((e,i)=>(
        <motion.div key={i} className="card"
          initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}
          transition={{delay:i*0.2}} viewport={{once:true}}>
          <div><strong>{e.year}</strong></div>
          <div>{e.title_en} / {e.title_fr}</div>
          <div>{e.place}</div>
        </motion.div>
      ))}
    </section>
  )
}
