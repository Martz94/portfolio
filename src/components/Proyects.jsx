import React from 'react'
import Imagen1 from '/proyecto1.png'
import Imagen2 from '/proyecto2.png'
import Imagen3 from '/proyecto3.png'
import Imagen4 from '/proyecto4.png'
import Imagen5 from '/proyecto5.png'
import Imagen6 from '/proyecto6.png'
import { Slide, Fade } from 'react-awesome-reveal'
import { IoRemoveOutline } from "react-icons/io5";

const CardData = [
    {
        id: 1,
        img: Imagen1,
        title: "APP Web Bolaños",
        desc: "Construido con NextJS, TypeScript, Tailwind y CMS Contentful",
        url: "https://www.pinturasyherrajesbolanos.com/"
    },
    {
        id: 2,
        img: Imagen2,
        title: "Contador de Calorias",
        desc: "Tecnologias: React, TypeScript, Tailwind CSS",
        url: "https://contador-de-calorias-gamma.vercel.app"
    },
    {
        id: 3,
        img: Imagen3,
        title: "Cotizador de Criptomonedas",
        desc: " Tecnologias: React, API Rest y Styled",
        url: "https://cripto-price-app.netlify.app"
    },
    {
      id: 4,
      img: Imagen4,
      title: "Consultor de Clima",
      desc: "Tecnologias: React, API Rest, TypeScript y module CSS",
      url: "https://app-clima-rt.netlify.app"
  },
  {
      id: 5,
      img: Imagen5,
      title: "Registraddor de Consulta",
      desc: "Tecnologias: React, TypeScript y Tailwind CSS",
      url: "https://consultas-veterinaria-app.netlify.app"
  },
  {
      id: 6,
      img: Imagen6,
      title: "Characters R&M",
      desc: "Tecnologias: React, API Rest y Bootstrap",
      url: "https://characters-rickymorty.netlify.app"
  },
]

const Proyects = () => {
  return (
      <div id='proyects' className='xl:min-h-screen mb-14 lg:mb-0 grid place-items-center max-w-screen-lg mx-auto px-5'>
          <div className=' container mx-auto'>
          <h3 className=' text-sky-700 decoration-4 decoration-sky-700 z-10 font-medium text-2xl lg:text-4xl text-center pt-20 pb-0'>Proyectos</h3>
          <IoRemoveOutline className='text-sky-700 mx-auto h-10 w-20 pt-0 mb-10 hover:text-sky-700'/>
              {/*seccion card */}
              <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6'>
                  {CardData.map(({ id, img, title, desc, url}) => {
                    return(
                  <div 
                  key={id} 
                  className=' text-white shadow-md rounded-lg 
                  overflow-hidden relative group'
                  >
                  <img
                  src={img} 
                  alt="Louvre" 
                  className=' md:w-full md:max-w-[400px] md:h-[220px] 
                  rounded-lg transition duration-300 ease-in-out hover:scale-110'
                    />
                    {/* overlay seccion */}
                    <div className=' absolute left-0 top-[-100%] 
                    opacity-0 group-hover:opacity-100
                    group-hover:top-[0] p-4 w-full h-full
                    bg-black/60 group-hover:backdrop-blur-sm
                    duration-500'>
                      <div className=' space-y-4'>
                        <Slide>
                        <h1 className='text-2xl font-semibold text-zinc-300'>
                          {title}</h1>
                          <Fade cascade damping={0.05}>
                            <p>{desc}</p> 
                          </Fade>
                          <div>
                            <a href={url}>
                            <button type="button" className=' border
                             border-white px-4 py-2 rounded-lg
                             hover:bg-black/20 duration-300 hover:bg-sky-700'>
                              ver</button>
                              </a>
                          </div>
                          </Slide>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
          </div>
      </div>
  )
}

export default Proyects
