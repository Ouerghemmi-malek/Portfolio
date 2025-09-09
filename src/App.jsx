import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Timeline from './components/Timeline.jsx'
import Map from './components/Map.jsx'
import Footer from './components/Footer.jsx'
import { translations } from './i18n.js'
import Contact from "./components/Contact";


export default function App(){
  const [lang,setLang]=useState('en')
  const t=translations[lang]
  return(
    <div>
      <Navbar lang={lang} setLang={setLang}/>
      <Hero t={t}/>
      <Projects t={t} lang={lang}/>
      <Timeline t={t}/>
      <Map t={t}/>
      <Contact />
      <Footer/>
    </div>
  )
}
