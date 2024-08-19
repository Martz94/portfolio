import React from 'react'
import { IoRemoveOutline } from "react-icons/io5";
import { BsTelephoneForwardFill } from "react-icons/bs";

const Aboutme = () => {
  return (
    <>
    <div id='aboutme' className=' dark:bg-zinc-900 max-w-screen-lg mx-auto block justify-center mb-16 mt-32 px-5 scroll-smooth'>
        <h3 className=' text-sky-700 decoration-4 decoration-sky-700 z-10 font-medium text-2xl lg:text-4xl text-center pb-0'>Sobre mi</h3>
        <IoRemoveOutline className='text-sky-700 mx-auto h-10 w-20 pt-0 mb-10'/>
        <div className=' max-w-screen-lg block lg:flex gap-10 mx-auto'>
          <div className=' sm:w-1/2 mx-auto w-full sm:px-2'>
            <img src="/fotoperfil2.jpg" alt="perfil2" className=' transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0'/>
          </div>
          <div className=' w-auto lg:w-1/2 mx-auto mt-8 lg:mt-0 sm:px-2' id='about'>
            <h3 className=' text-white z-10 font-medium text-2xl text-center '>Hola, mi nombre es Uriel Martínez Pascual</h3>
            <h3 className=' text-sky-700 z-10 text-2xl text-center mb-4'>Desarrollador Web</h3> 
            <div>
              <p className='text-gray-400'>Soy Desarrollador web Front-End con una carrera profesional en Ingeniería en Informática De manera independiente he realizados proyectos  y colaboraciones que me han ayudado a seguir desarrollándome, 
                así como también aprendiendo de las nuevas tecnologías que surgen en el entorno. Me gusta ser autodidacta, tener iniciativa propia, ser comprometido y responsable.</p>
                <div className=' flex gap-5'>
                <ul className=' text-gray-400 mt-5'>
                  <li className=' my-2'>
                    <button className=" flex items-center gap-1 text-sky-600 hover:text-white pe-2">
                          <BsTelephoneForwardFill /><p className=' text-transparent hover:text-sky-700'>921 123 75 12</p>
                      </button></li>
                  <li className=' my-2'>Email: urielmartzpascual@gmail.com</li>
                  <li className=' my-2'>Ciudad de México, México.</li>
                  <li className=' my-2'>Freelancer</li>
                  <li className=' my-2'>Titulo: Ingeniería Informática</li>              
                </ul>
                <a href='https://drive.google.com/file/d/1n6oJQwLKgMGf9g_vcatMBpKBaU9dlRLK/view?usp=sharing' className=' mt-auto ms-auto mb-2'>
                <button type="button" className="py-2.5 px-10 me-2 mt-8 mb-0 text-sm font-medium text-white bg-white rounded-md border border-sky-700 hover:bg-zinc-800 hover:text-sky-700 dark:bg-sky-700 dark:text-zinc-200 dark:border-sky-700 dark:hover:text-sky-700 shadow-lg hover:shadow-sky-700 dark:hover:bg-gray-700">
                CV</button>
                </a>
                </div>
            </div> 
          </div>
        </div>  
      </div>
    </>
  )
}

export default Aboutme
