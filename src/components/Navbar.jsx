import React from 'react'
export default function Navbar({lang,setLang}){
  return(
    <nav className="navbar">
      <div><strong>Malek Ouerghemmi</strong></div>
      <div>
        <button onClick={()=>setLang('en')}>EN</button>
        <button onClick={()=>setLang('fr')}>FR</button>
      </div>
    </nav>
  )
}
