import React from 'react'
import { IoRemoveOutline } from "react-icons/io5";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { FaFolderOpen } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";

const Aboutme = () => {
  return (
    <>
    <div id='aboutme' className=' dark:bg-zinc-900 bg-neutral-300 max-w-screen-lg mx-auto block justify-center mb-16 mt-32 px-5'>
        <h3 className=' text-sky-700 decoration-4 decoration-sky-700 z-10 font-medium text-2xl lg:text-4xl text-center pb-0'>Sobre mi</h3>
        <IoRemoveOutline className='text-sky-700 mx-auto h-10 w-20 pt-0 mb-10'/>
        <div className=' max-w-screen-lg px-2 block md:flex mx-auto'>
          <div className=' sm:w-1/2 mx-auto w-full sm:px-2'>
            <img src="/fotoperffil2.png" alt="perfil2" className=' object-cover max-h-[28rem] invisible md:visible -mt-10 mx-auto -z-0 md:z-10'/>
          </div>
          <div className=' w-auto md:w-1/2 mx-auto -mt-96 md:mt-0 sm:px-2' id='about'>
            <h3 className=' text-zinc-800 dark:text-zinc-300 z-10 font-medium text-2xl mb-2'>Hola, mi nombre es Uriel Martínez Pascual</h3>
            <div>
              <p className=' text-zinc-700 dark:text-zinc-400'>Desarrollador web Front-End con carrera profesional en Ingeniería en Informática. He realizados proyectos independientes y colaboraciones que me han ayudado a ampliar mis conocimientos, 
                así como también actualizando mis habilidades con las nuevas tecnologías. Me gusta ser autodidacta,  iniciativa, comprometido responsable, pasión por la programación y desarrollo web.</p>
              <div className=' block gap-5 mt-5'>
                <h2 class=" mb-1 font-semibold text-zinc-800 dark:text-zinc-300">Servicios:</h2>
                <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                  <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 me-2 text-sky-700 dark:text-sky-700 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Experiencia de Usuario
                  </li>
                  <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 me-2 text-sky-700 dark:text-sky-700 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Diseño Responsivo
                  </li>
                  <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 me-2 text-sky-700 dark:text-sky-700 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Hosting y Dominio
                  </li>
                  <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 me-2 text-sky-700 dark:text-sky-700 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    SEO
                  </li>
                </ul>
                <a href="tel:9211237512" className=" flex items-center text-sky-600 mt-5 hover:text-zinc-700 dark:hover:text-zinc-200 pe-2 gap-2 cursor-pointer">
                  <BsTelephoneForwardFill className=' h-5 w-5' />TELEFONO
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-14 block md:flex gap-5 px-5'>
        <div className=' w-auto md:w-1/2'>
            <div className=' text-sky-700 hover:text-zinc-700 dark:hover:text-zinc-300'>
              <h4 className=' flex items-center gap-5 text-2xl font-semibold my-7'><FaFolderOpen className=' w-12 h-12' /> Experiencia</h4>
            </div>
            <ol className="relative border-s border-gray-400 dark:border-gray-700">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-sky-700 dark:bg-sky-700">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>
                </div>
                <div className=' text-zinc-700 dark:text-zinc-400 hover:text-sky-700 dark:hover:text-sky-700'>
                  <time className="mb-1 text-sm font-normal leading-none">App Web Bolaños</time>
                  <h3 className="text-lg font-semibold">Comercio Bolaños</h3>
                  <p className="text-base font-normal">Aplicación web construido con tecnologías como: Next JS, TypeScript, Tailwind CSS CMS. Funcionamientos Principales Mostrar catálogos de productos, Gestión, Enlaces y Contacto.</p>
                </div>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-sky-700 rounded-full mt-1.5 -start-1.5 border dark:border-gray-900 border-sky-700 dark:bg-sky-700"></div>
                 <div className='  text-zinc-700 dark:text-zinc-400 hover:text-sky-700 dark:hover:text-sky-700'>
                  <time className="mb-1 text-sm font-normal leading-none">Freelancer</time>
                  <h3 className="text-lg font-semibold ">Aplicaciones web</h3>
                  <p className="text-base font-normal">Aplicando mis conocimientos he realizado diferentes aplicaciones web, con tecnologías como: React, Bootstrap, Tailwind CSS, TypeScript, Next JS Y API Rest.</p>
                  </div>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-sky-700 rounded-full mt-1.5 -start-1.5 border dark:border-gray-900 border-sky-700 dark:bg-sky-700"></div>
                <div className='  text-zinc-700 dark:text-zinc-400 hover:text-sky-700 dark:hover:text-sky-700'>
                  <time className="mb-1 text-sm font-normal leading-none">Residencia y Servicio</time>
                  <h3 className="text-lg font-semibold">Proyectos Académicos</h3>
                  <p className="mb-4 text-base font-normal">Realice proyectos como: Pagina web de comercio para la Empresa SIGSA, Tecnologías: HTML, CSS, PHP y Hosting, asi también un sistema de control de registro asistencial para una escuela. Tecnologias: Java, Arduino y Lector Biometrico.</p>
                </div>
              </li>
            </ol>
          </div>
          <div className=' w-auto md:w-1/2'>
          <div className=' text-sky-700 hover:text-zinc-700 dark:hover:text-zinc-300'>
          <h4 className=' flex items-center gap-5 text-2xl font-semibold my-7'><IoSchool  className=' w-12 h-12' />Estudios</h4>
          </div>   
            <ol className="relative border-s border-zinc-400 dark:border-zinc-700">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-zinc-500 rounded-full mt-1.5 -start-1.5 border border-sky-700 dark:bg-sky-700">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-700 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>
                </div>
                <div className=' text-zinc-700 dark:text-zinc-400 hover:text-sky-700 dark:hover:text-sky-700'>              
                <time className="mb-1 text-sm font-normal leading-none ">Universidad</time>
                <h3 className="text-lg font-semibold ">Instituto Tecnológico Superior de Coatzacoalcos</h3>
                <p className="mb-4 text-base font-normal ">Titulo en Ingeniería Informática, realice proyectos durante el servicio social y residencia, aplicando metodologías ágiles y tecnologías de acuerdo a los requerimientos.</p>
                </div> 
              </li>
              <li className="mb-10 ms-4">
                <div className=" absolute w-3 h-3 bg-sky-700 rounded-full mt-1.5 -start-1.5 border dark:border-gray-900 border-sky-700 dark:bg-sky-700"></div>
                <div className=' text-zinc-700 dark:text-zinc-400 hover:text-sky-700 dark:hover:text-sky-700'> 
                <time className="mb-1 text-sm font-normal leading-none ">Cursos</time>
                <h3 className="text-lg font-semibold ">Cursos, Blogs, Documentación y Recursos online</h3>
                <p className="text-base font-normal">Aprendiendo y ampliando mis conocimientos con las nuevas tecnologías que van surgiendo, adquiriendo información y tendencias de las mismas, añadiéndolos a mis habilidades para mantenerme actualizado.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme
