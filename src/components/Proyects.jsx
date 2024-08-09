import React from 'react'
import Imagen1 from '/proyecto1.png'
import Imagen2 from '/proyecto2.png'
import Imagen3 from '/proyecto3.png'
import Imagen4 from '/proyecto4.png'
import Imagen5 from '/proyecto5.png'
import Imagen6 from '/proyecto6.png'
import { Slide, Fade } from 'react-awesome-reveal'

const CardData = [
    {
        id: 1,
        img: Imagen1,
        title: " Web Bolaños",
        desc: "Aplicacion Web de catalogo de productos",
    },
    {
        id: 2,
        img: Imagen2,
        title: "Contador de Calorias",
        desc: "each character will appear one by one",
    },
    {
        id: 3,
        img: Imagen3,
        title: "sunrise",
        desc: "each character will appear one by one",
    },
    {
      id: 4,
      img: Imagen4,
      title: "sunset",
      desc: "each character will appear one by one",
  },
  {
      id: 5,
      img: Imagen5,
      title: "dog",
      desc: "each character will appear one by one",
  },
  {
      id: 6,
      img: Imagen6,
      title: "sunrise",
      desc: "each character will appear one by one",
  },
]

const Proyects = () => {
  return (
      <div className='min-h-screen grid place-items-center max-w-screen-lg mx-auto'>
          <div className=' container mx-auto'>
              <h1 className='text-center text-sky-700 font-bold text-3xl mb-14 mt-5 sm:mt-0'>Proyectos</h1>

              {/*seccion card */}
              <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6'>
                  {CardData.map(({ id, img, title, desc }) => {
                    return(
                  <div 
                  key={id} 
                  className=' text-white shadow-md rounded-lg 
                  overflow-hidden relative group'
                  >
                  <img
                  src={img} 
                  alt=""
                  className=' w-full max-w-[400px] h-[220px] 
                  rounded-lg'
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
                            {desc}
                          </Fade>
                          <div>
                            <button type="button" className=' border
                             border-white px-4 py-2 rounded-lg
                             hover:bg-black/20 duration-300 hover:bg-zinc-800'>
                              ver</button>
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
