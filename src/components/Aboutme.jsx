import React from 'react'
import { IoRemoveOutline } from "react-icons/io5";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { FaFolderOpen } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";

const Aboutme = () => {
  return (
    <>
    <div id='aboutme' className=' dark:bg-zinc-900 bg-neutral-300 max-w-screen-lg mx-auto block justify-center mb-16 mt-32 px-5'>
        <h3 className=' text-sky-700 decoration-4 decoration-sky-700 z-10 font-medium text-2xl lg:text-4xl text-center pb-0'>Sobre mi</h3>
        <IoRemoveOutline className='text-sky-700 mx-auto h-10 w-20 pt-0 mb-10'/>
        <div className=' max-w-screen-lg block lg:flex mx-auto'>
          <div className=' sm:w-1/2 mx-auto w-full sm:px-2'>
            <img src="/fotoperffil2.png" alt="perfil2" className=' object-cover max-h-[28rem] -mt-10 mx-auto'/>
          </div>
          <div className=' w-auto lg:w-1/2 mx-auto mt-8 lg:mt-0 sm:px-2' id='about'>
            <h3 className=' text-zinc-800 dark:text-zinc-200 z-10 font-medium text-2xl text-center '>Hola, mi nombre es Uriel Martínez Pascual</h3>
            <h3 className=' text-sky-700 z-10 text-2xl text-center mb-4'>Desarrollador Web</h3> 
            <div>
              <p className=' text-zinc-700 dark:text-zinc-400'>Soy Desarrollador web Front-End con una carrera profesional en Ingeniería en Informática. he realizados proyectos  y colaboraciones que me han ayudado a ampliar mis conocimientos, 
                así como también actualizandome con las nuevas tecnologias. Me gusta ser autodidacta,  iniciativa, comprometido responsable, pasion por la programacion y desarrollo web.</p>
              <div className=' flex gap-5'>
                <ul className=' text-gray-400 mt-5'>
                  <li className=' text-zinc-700 dark:text-zinc-200 my-2'>Ciudad de México, México.</li>
                  <li className=' text-zinc-700 dark:text-zinc-200 my-2'>Freelancer</li>
                  <li className=' text-zinc-700 dark:text-zinc-200 my-2'>Titulo: Ingeniería Informática</li>
                    <a href="tel:9211237512" className=" flex items-center text-sky-600 mt-7 hover:text-zinc-700 dark:hover:text-zinc-200 pe-2 gap-2 cursor-pointer">
                      <BsTelephoneForwardFill className=' h-5 w-5'/>Contactar
                    </a>
                </ul>
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
                  <p className="text-base font-normal">Aplicacion web construido con tecnologias como: Next JS, TypeScript, Tailwind CSS CMS. Funcionamientos Principales Mostrar catalogos de productos, Gestion, Enlaces y Contacto.</p>
                </div>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-sky-700 rounded-full mt-1.5 -start-1.5 border dark:border-gray-900 border-sky-700 dark:bg-sky-700"></div>
                 <div className='  text-zinc-700 dark:text-zinc-400 hover:text-sky-700 dark:hover:text-sky-700'>
                  <time className="mb-1 text-sm font-normal leading-none">Freelancer</time>
                  <h3 className="text-lg font-semibold ">Aplicaciones web</h3>
                  <p className="text-base font-normal">Aplicando mis conocimientos he realizado diferentes aplicasiones web, con tecnologias como: React, Bootstrap, Tailwind CSS, TypeScript, Next JS Y API Rest.</p>
                  </div>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-sky-700 rounded-full mt-1.5 -start-1.5 border dark:border-gray-900 border-sky-700 dark:bg-sky-700"></div>
                <div className='  text-zinc-700 dark:text-zinc-400 hover:text-sky-700 dark:hover:text-sky-700'>
                  <time className="mb-1 text-sm font-normal leading-none">Residencia y Servicio</time>
                  <h3 className="text-lg font-semibold">Proyectos Academicos</h3>
                  <p className="mb-4 text-base font-normal">Realice proyectos web de e-commerce para la Empresa SIGSA, Tecnologias: HTML, CSS, PHP y Hosting, asi tambien un sistema de control de registro asistencial para una escuela. Tecnologias: Java, Arduino y Lector Biometrico.</p>
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
                <h3 className="text-lg font-semibold ">Instituto Tecnologico Superior de Coatzacoalcos</h3>
                <p className="mb-4 text-base font-normal ">Titulo en Ingenieria Informatica, realice proyectos durante el servicio social y residencia, aplicando metodologias agiles y tecnologias de acuerdo a los requerimientos.</p>
                </div> 
              </li>
              <li className="mb-10 ms-4">
                <div className=" absolute w-3 h-3 bg-sky-700 rounded-full mt-1.5 -start-1.5 border dark:border-gray-900 border-sky-700 dark:bg-sky-700"></div>
                <div className=' text-zinc-700 dark:text-zinc-400 hover:text-sky-700 dark:hover:text-sky-700'> 
                <time className="mb-1 text-sm font-normal leading-none ">Cursos</time>
                <h3 className="text-lg font-semibold ">Cursos, Blogs, Documentacion y Recursos online</h3>
                <p className="text-base font-normal">Aprediendo y Actualizandome con las nuevas tecnologias en el sector, asi tambien adquiriendo informacion de tendencias y noticias relevantes de las nuevas recnologias.</p>
                </div>
              </li>
              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-sky-700 rounded-full mt-1.5 -start-1.5 border dark:border-gray-900 border-sky-700 dark:bg-sky-700"></div>
                <div className=' text-zinc-700 dark:text-zinc-400 hover:text-sky-700 dark:hover:text-sky-700'> 
                <time className="mb-1 text-sm font-normal leading-none">Colaboración</time>
                <h3 className="text-lg font-semibold">Experiencia</h3>
                <p className="text-base font-normal"> Proyecto donde se aplicaron conceptos como: Comunicación, organización, planificación y estructura del proyecto, para obtener los mejores resultados.</p>
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
