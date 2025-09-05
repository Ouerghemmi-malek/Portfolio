import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
export default function Map({t}){
  useEffect(()=>{
    const map = L.map('mapid').setView([36.8,10.2],8)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution:'&copy; OpenStreetMap' }).addTo(map)
    L.marker([36.74,10.23]).addTo(map).bindPopup('Ben Arous')
  },[])
  return(
    <section id="map">
      <h2>{t.map.title}</h2>
      <div id="mapid" style={{height:'400px'}}></div>
    </section>
  )
}
