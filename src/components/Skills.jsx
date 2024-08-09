import React from 'react'
import { IoRemoveOutline } from "react-icons/io5";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { FaFolderOpen } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { IoLibrarySharp } from "react-icons/io5";
import { SiFramework } from "react-icons/si";
import { FaBorderStyle } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import { LuFileJson } from "react-icons/lu";

const Skills = () => {
  return (
    <>
     
      <div className=' max-w-screen-lg mx-auto mb-10'>
        <h3 className=' text-sky-700 decoration-4 decoration-sky-700 z-10 font-medium text-2xl text-center pt-20 pb-0'>Skills</h3>
        <IoRemoveOutline className='text-sky-700 mx-auto h-10 w-20 pt-0 mb-10 hover:text-sky-700'/>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <a href="#" className="block max-w-sm p-6 rounded-md hover:shadow-lg border border-zinc-700 dark:bg-zinc-800 hover:shadow-sky-700 justify-center hover:border-sky-700">
            <PiPencilSimpleLineBold  className=' w-24 h-24 mx-auto text-sky-700 mb-2'/>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mx-auto">Lenguajes</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mx-auto">JavaScript, TypeScript, HTML, CSS</p>
          </a>
          <a href="#" className="block max-w-sm p-6 rounded-md hover:shadow-lg border border-zinc-700 dark:bg-zinc-800 hover:shadow-sky-700 justify-center hover:border-sky-700">
            <IoLibrarySharp className=' w-24 h-24 mx-auto text-sky-700 mb-2'/>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mx-auto">Librerias y Framework</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mx-auto">React JS, Next JS, Bootstrap, Tailwind CSS</p>
          </a>
          <a href="#" className="block max-w-sm p-6 rounded-md hover:shadow-lg border border-zinc-700 dark:bg-zinc-800 hover:shadow-sky-700 justify-center hover:border-sky-700">
            <SiFramework  className=' w-24 h-24 mx-auto text-sky-700 mb-2'/>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mx-auto">Herramientas de Desarrollo</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mx-auto">Githup, Note JS, VS Code, Vite, webPack</p>
          </a>
          <a href="#" className="block max-w-sm p-6 rounded-md hover:shadow-lg border border-zinc-700 dark:bg-zinc-800 hover:shadow-sky-700 justify-center hover:border-sky-700">
            <FaBorderStyle className=' w-24 h-24 mx-auto text-sky-700 mb-2'/>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mx-auto">Preprocesadores</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mx-auto">SASS, Stylus CSS, Modules CSS</p>
          </a>
          <a href="#" className="block max-w-sm p-6 rounded-md hover:shadow-lg border border-zinc-700 dark:bg-zinc-800 hover:shadow-sky-700 justify-center hover:border-sky-700">
            <FaSyncAlt className=' w-24 h-24 mx-auto text-sky-700 mb-2'/>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mx-auto">Consultas y Estructura de datos</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mx-auto">API Rest, CMS Contentful, Json, query</p>
          </a>
        </div>
        <div className='mt-14 flex gap-5'>
          <div className=' w-1/2'>
            <h4 className=' flex text-zinc-300 items-center gap-5 text-2xl font-semibold my-7'><FaFolderOpen className=' text-sky-700 w-12 h-12' />Estudios</h4>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-sky-700 dark:bg-sky-700">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>
                </div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Universidad</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Instituto Tecnologico Superior de Coatzacoalcos</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Me titule en ingenieria informatica, donde realice diferentes proyectos durante el servicio social y residencia,</p>
              </li>
              <li className="mb-10 ms-4">
                <div className=" absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border dark:border-gray-900 border-sky-700 dark:bg-sky-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Cursos</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Udemy, Blogs, Documentacion y videos</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Me he estado actualizando con las nuevas tecnologias en diferentes medios y recursos, de manera Autonoma.</p>
              </li>
              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border dark:border-gray-900 border-sky-700 dark:bg-sky-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Bootcamp</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Asesoria</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">He recibido apoyo y asesoria en cuanto rutas de aprendizaje para con las nuevas tecnologias.</p>
              </li>
            </ol>
          </div>
          <div className=' w-1/2'>
            <h4 className=' flex text-zinc-300 items-center gap-5 text-2xl font-semibold my-7'><IoSchool className=' text-sky-700 w-12 h-12' /> Experiencia</h4>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-sky-700 dark:bg-sky-700">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>
                </div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Residencia y Servicio</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Proyectos academicos</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Realice proyectos web de ecommerce para una empresa, donde aplique mis conocimientos de desarrollador, asi tambien un sistema de control de registro para una escuela.</p>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border dark:border-gray-900 border-sky-700 dark:bg-sky-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Independiente</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Aplicaciones web</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Aplicando mis conocimientos he realizado diferentes aplicasiones web, con diferentes funcionalidades.</p>
              </li>
              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border dark:border-gray-900 border-sky-700 dark:bg-sky-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Bolaños</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Pagina web de la Empresa</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Realice aplicacion web con diferentes tecnologias, donde se muestran el catalogo de productos y la administracion de los mismos. </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Skills
