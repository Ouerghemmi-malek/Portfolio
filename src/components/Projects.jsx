import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Projects({t}){
  const sampleProjects=[
    {title:'IoT Supervision', hero:'https://via.placeholder.com/600x300', images:['https://via.placeholder.com/200','https://via.placeholder.com/200']},
    {title:'3D Layout', hero:'https://via.placeholder.com/600x300', images:['https://via.placeholder.com/200','https://via.placeholder.com/200']}
  ]
  return(
    <section id="projects">
      <h2>{t.hero.ctaProjects}</h2>
      {sampleProjects.map((p,i)=>(
        <div key={i} className="card">
          <Swiper modules={[Pagination]} pagination={{clickable:true}} spaceBetween={10} slidesPerView={1}>
            {[p.hero,...p.images].map((url,j)=>(
              <SwiperSlide key={j}><img src={url} alt={p.title}/></SwiperSlide>
            ))}
          </Swiper>
          <h3>{p.title}</h3>
        </div>
      ))}
    </section>
  )
}
