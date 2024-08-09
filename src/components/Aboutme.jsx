import React from 'react'
import { IoRemoveOutline } from "react-icons/io5";


const Aboutme = () => {
  return (
    <>
    <div className=' dark:bg-zinc-900 max-w-screen-lg mx-auto block justify-center min-h-screen mt-32'>
        <h3 className=' text-sky-700 decoration-4 decoration-sky-700 z-10 font-medium text-2xl text-center pb-0'>About me</h3>
        <IoRemoveOutline className='text-sky-700 mx-auto h-10 w-20 pt-0 mb-10'/>
        <div className=' max-w-screen-lg flex gap-10'>
          <div className=' w-1/2'>
            <img src="/fotoperfil2.jpg" alt="perfil2" className=' transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0'/>
          </div>
          <div className=' w-1/2'>
            <h3 className=' text-white z-10 font-medium text-4xl text-center '>Hola, Mi nombre es Uriel Martinez Pascual</h3>
            <h3 className=' text-sky-700 z-10 text-2xl text-center mb-4'>Desarrollador Web</h3> 
            <div>
              <p className='text-gray-400'>Soy Desarrollador web. De manera independiente he realizados proyectos  y colaboraciones que me han ayudado a seguir desarrollándome, 
                así como también aprendiendo de las nuevas tecnologías que surgen 
                en el entorno. </p>
                <ul className=' text-gray-400 mt-5'>
                  <li className=' my-2'>TEL: 921 123 75 12</li>
                  <li className=' my-2'>Email: urielmartzpascual@gmail.com</li>
                  <li className=' my-2'>Ciudad: Ciudad de Mexico, Mexico.</li>
                  <li className=' my-2'>Trabajo Actual: Freelance</li>
                  <li className=' my-2'>Titulo: Ingenieria Informatica</li>              
                </ul>
                <button type="button" className="py-2.5 px-10 me-2 mt-8 mb-0 text-sm font-medium text-white bg-white rounded-full border border-sky-700 hover:bg-zinc-800 hover:text-sky-700 dark:bg-sky-700 dark:text-zinc-200 dark:border-sky-700 dark:hover:text-sky-700 shadow-lg hover:shadow-sky-700 dark:hover:bg-gray-700">CV</button> 
            </div> 
          </div>
        </div>  
      </div>
    </>
  )
}

export default Aboutme
