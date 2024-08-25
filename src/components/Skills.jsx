import React from 'react'
import { IoRemoveOutline } from "react-icons/io5";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { IoLibrarySharp } from "react-icons/io5";
import { SiFramework } from "react-icons/si";
import { FaBorderStyle } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <>
     
      <div id='skills' className=' max-w-screen-lg mx-auto mb-10 md:mb-20'>
        <h3 className=' text-sky-700 decoration-4 decoration-sky-700 z-10 font-medium text-2xl lg:text-4xl text-center pt-20 pb-0'>Habilidades</h3>
        <IoRemoveOutline className='text-sky-700 mx-auto h-10 w-20 pt-0 mb-10 hover:text-sky-700'/>
        <h4 className=' text-zinc-700 dark:text-zinc-300 mx-auto px-5 text-xl mb-5'>Manejo de elementos integrados para el desarrollo: Interfaz de Usuario, Experiencia de Usuario, SEO, Hosting, Dominio y Diseño Responsivo, asi también como la implementación de las siguientes Tecnologías.</h4>
        <div className=" block sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5 mx-auto">
          <div className="block max-w-sm p-6 rounded-md hover:shadow-lg border border-zinc-400 dark:border-zinc-700 bg-zinc-400 dark:bg-zinc-800 hover:shadow-sky-700 justify-center hover:border-sky-700 mx-auto sm:mx-0 mb-5 sm:mb-0 ">
            <PiPencilSimpleLineBold  className=' w-16 h-16 sm:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto text-sky-700 mb-2 hover:text-zinc-300'/>
            <h5 className="mb-2 text-xl md:text-2xl  font-semibold tracking-tight text-gray-900 dark:text-zinc-300 mx-auto">Lenguajes</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mx-auto">JavaScript, TypeScript, HTML, CSS</p>
          </div>
          <div className="block max-w-sm p-6 rounded-md bg-zinc-400 border-zinc-400 hover:shadow-lg border dark:border-zinc-700 dark:bg-zinc-800 hover:shadow-sky-700 justify-center hover:border-sky-700 mx-auto mb-5 sm:mb-0 sm:mx-0">
            <IoLibrarySharp className=' w-16 h-16 sm:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto text-sky-700 mb-2 hover:text-zinc-300'/>
            <h5 className="mb-2 text-xl md:text-2xl  font-semibold tracking-tight text-gray-900 dark:text-zinc-300 mx-auto">Librerías y Framework</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mx-auto">React JS, Next JS, Bootstrap, Tailwind CSS</p>
          </div>
          <div className="block max-w-sm p-6 rounded-md hover:shadow-lg border bg-zinc-400 border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 hover:shadow-sky-700 justify-center hover:border-sky-700 mx-auto sm:mx-0 mb-5 sm:mb-0 ">
            <SiFramework  className=' w-16 h-16 sm:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto text-sky-700 mb-2 hover:text-zinc-300'/>
            <h5 className="mb-2 text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-zinc-300 mx-auto">Herramientas de Desarrollo</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mx-auto">Github, Note JS, VS Code, Vite, webPack</p>
          </div>
          <div className="block max-w-sm p-6 rounded-md hover:shadow-lg border bg-zinc-400 border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 hover:shadow-sky-700 justify-center hover:border-sky-700 mx-auto sm:mx-0 mb-5 sm:mb-0 ">
            <FaBorderStyle className=' w-16 h-16 sm:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto text-sky-700 mb-2 hover:text-zinc-300'/>
            <h5 className="mb-2 text-xl md:text-2xl  font-semibold tracking-tight text-gray-900 dark:text-zinc-300 mx-auto">Herramientas de estilos</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mx-auto">SASS, Styled CSS, Modules CSS</p>
          </div>
          <div className="block max-w-sm p-6 rounded-md hover:shadow-lg border bg-zinc-400 border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 hover:shadow-sky-700 justify-center hover:border-sky-700 mx-auto sm:mx-0 mb-5 sm:mb-0 ">
            <FaSyncAlt className=' w-16 h-16 sm:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto text-sky-700 mb-2 hover:text-zinc-300'/>
            <h5 className="mb-2 text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-zinc-300 mx-auto">Consultas y Estructura de datos</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mx-auto">API Rest, CMS, Json, GraphQL</p>
          </div>
        </div>   
      </div>
     
    </>
  )
}

export default Skills
