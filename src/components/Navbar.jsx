import React from 'react'
import { BsTelephoneForwardFill } from "react-icons/bs";
import { useState } from 'react';


const Navbar = () => {

    const [isNav, setIsNav] = useState(false);
    const toggleNavbar = () =>{
        setIsNav(!isNav);
    }
  return (
      <>
          <nav className=' dark: bg-zinc-900 md:py-2  z-50 fixed top-0 w-full'>
              <div className=' max-w-6xl mx-auto scroll-px-10 sm:px-6 lg:px-8'>
                  <div className=' flex items-center justify-between h-16'>
                      <div className='flex items-center'>
                          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                              <img src="/logopersonal.png" className=" h-10 md:h-14" alt="Logo" />
                          </a>
                      </div>
                      <div className=' flex gap-5 lg:gap-10'>
                      <div className='hidden md:block'>
                          <div className=' ml-4 flex items-center space-x-4'>
                              <a href="#home" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:underline">Inicio</a>
                              <a href="#aboutme" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:underline">Sobre mi</a>
                              <a href="#skills" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:underline">Habilidades</a>
                              <a href="#proyects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:underline">Proyectos</a>
                              <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:underline">Contacto</a>
                          </div>
                      </div>
                      <p className=" md:text-white text-transparent">|</p>
                      <button className=" flex items-center gap-1 text-sky-600 hover:text-white pe-2">
                          <BsTelephoneForwardFill /><p className=' text-transparent hover:text-sky-700'>921 123 75 12</p>
                      </button>
                      </div>
                      <div className=' md:hidden flex items-center'>
                          <button className=' inline-flex items-center justify-center p-2 text-white 
                                         hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                              onClick={toggleNavbar}>
                              {isNav ? (
                                  <svg
                                      className='h-6 w-6'
                                      xmlns='http://www.w3.org/2000/svg'
                                      fill='none'
                                      viewBox='0 0 24 24'
                                      stroke='white'
                                  >
                                      <path
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          strokeWidth={2}
                                          d='M6 18L18 6M6 6l12 12'
                                      />
                                  </svg>
                              ) : (
                                  <svg
                                      className='h-6 w-6'
                                      xmlns='http://www.w3.org/2000/svg'
                                      fill='none'
                                      viewBox='0 0 24 24'
                                      stroke='white'
                                  >
                                      <path
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          strokeWidth={2}
                                          d='M4 6h16M4 12h16m-7 6h7'
                                      />
                                  </svg>
                              )}
                          </button>
                      </div>
                  </div>
              </div>
              {isNav && (
                  <div className=' md:hidden'>
                      <div className=' px-2 pt-2 space-y-1 sm:px-3'>
                          <a href="#home" className="block py-2 px-3  text-white bg-zinc-700 rounded md:bg-transparent md:text-sky-700 md:p-0 dark:text-white md:dark:text-sky-600" aria-current="page">Inicio</a>
                          <a href="#aboutme" className="block py-2 px-3 hover:text-sky-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-zinc-700  md:dark:hover:bg-transparent">Sobre mi</a>
                          <a href="#skills" className="block py-2 px-3 hover:text-sky-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-zinc-700 dark:hover:texthover:text-sky-700e md:dark:hover:bg-transparent">Habilidades</a>
                          <a href="#proyects" className="block py-2 px-3 hover:text-sky-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent">Proyectos</a>
                          <a href="#contact" className="block py-2 px-3 hover:text-sky-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent">Contacto</a>
                      </div>
                  </div>
              )}
          </nav>
               { /*
        <nav className=" dark: bg-zinc-900  z-50 fixed top-0 w-full">
              <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto ">
                  <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                      <img src="/logopersonal.jpg" className="h-16" alt="Logo" />
                  </a>
                  <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                      <span className="sr-only">Open main menu</span>
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                      </svg>
                  </button>
                  <div className="flex gap-12">
                  <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  bg-zinc-900  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-zinc-900  md:dark:bg-zinc-900  dark:border-gray-700 items-center">
                          <li>
                              <a href="/" className="block py-2 px-3  text-white bg-blue-700 rounded md:bg-transparent md:text-sky-600 md:p-0 dark:text-white md:dark:text-sky-600" aria-current="page">Inicio</a>
                          </li>
                          <li>
                              <a href="about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sobre mi</a>
                          </li>
                          <li>
                              <a href="skills" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Habilidades</a>
                          </li>
                          <li>
                              <a href="#proyects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Proyectos</a>
                          </li>
                          <li class=" me-5">
                                  <a href="contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contacto</a>
                              </li>
                          </ul>
                      </div>
                      <p className=" md:text-white text-transparent">|</p>
                      <div className=" flex items-center gap-1 text-sky-600 hover:text-white pe-2">
                          <BsTelephoneForwardFill /><p>921 123 75 12</p>
                      </div>
                  </div>
              </div>
          </nav>
         */ }
      </>
  )
}

export default Navbar
