import React from 'react'
import { Link } from 'react-scroll';
import { BsTelephoneForwardFill } from "react-icons/bs";
import { useState } from 'react';



const Navbar = () => {  

    const [isNav, setIsNav] = useState(false);
    const toggleNavbar = () =>{
        setIsNav(!isNav);
    }

  return (
      <>
        <div>
          <nav className=' bg-zinc-300 dark:bg-zinc-900 md:py-2 z-50 fixed top-0 w-full'>
              <div className=' max-w-6xl mx-auto scroll-px-10 sm:px-6 lg:px-8'>
                  <div className=' flex items-center justify-between h-16'>
                      <div className='flex items-center'>
                          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                              <img src="/logopersonal.png" className=" h-10 md:h-14" alt="Logo" />
                          </a>
                      </div>
                      <div className=' flex gap-5 lg:gap-10'>
                              <div className='hidden md:block my-auto'>
                                  <div className=' ml-4 flex items-center space-x-4'>
                                      <Link to="/" className="block font-medium cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 text- dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                          spy={true} smooth={true} offset={-50} duration={500}>Inicio</Link>
                                      <Link to="aboutme" className="block font-medium cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                          spy={true} smooth={true} offset={-100} duration={500}>Sobre mi</Link>
                                      <Link to="proyects" className="block font-medium cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "
                                          spy={true} smooth={true} offset={-50} duration={500}>Proyectos</Link>
                                      <Link to="skills" className="block font-medium cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "
                                          spy={true} smooth={true} offset={-50} duration={500}>Habilidades</Link>
                                      <Link to="contact" className="block font-medium cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "
                                          spy={true} smooth={true} offset={-50} duration={500}>Contacto</Link>
                                  </div>
                              </div>
                              <p className=" -ms-5 md:ms-0 md:text-zinc-900 dark:md:text-white text-transparent my-auto">|</p>
                              <a href='https://drive.google.com/file/d/1n6oJQwLKgMGf9g_vcatMBpKBaU9dlRLK/view?usp=sharing' className=' items-center ms-auto mx-auto my-auto'>
                                  <button type="button" className=" py-1 px-5 md:py-2 md:px-7 text-sm my-auto  items-center font-medium text-zinc-300 bg-sky-700 rounded-md border border-sky-700 hover:bg-zinc-300 hover:text-sky-700 dark:bg-sky-700 dark:text-zinc-200 dark:border-sky-700 dark:hover:text-sky-700 shadow-lg hover:shadow-sky-700 dark:hover:bg-gray-700">
                                      CV</button>
                              </a>
                          </div>
                      <div className=' md:hidden flex items-center'>
                          <button className=' inline-flex items-center justify-center p-2 text-zinc-700 dark:text-white hover:text-sky-700
                                         dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-700'
                              onClick={toggleNavbar}>
                              {isNav ? (
                                  <svg
                                      className='h-6 w-6 text-zinc-700 dark:text-zinc-300'
                                      xmlns='http://www.w3.org/2000/svg'
                                      fill='true'
                                      viewBox='0 0 24 24'
                                      stroke=' gray'
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
                                      fill='auto'
                                      viewBox='0 0 24 24'
                                      stroke=' gray'
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
                  <div className=' md:hidden pb-3'>
                      <div className=' px-2 pt-2 space-y-1 sm:px-3'>
                      <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-zinc-400 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:underline"
                                    spy={true} smooth={true} offset={50} duration={500}>Inicio</Link>
                              <Link to="aboutme" className="block py-2 px-3 text-gray-900 rounded hover:bg-zinc-400 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:underline"
                                    spy={true} smooth={true} offset={-100} duration={500}>Sobre mi</Link>
                              <Link to="skills" className="block py-2 px-3 text-gray-900 rounded hover:bg-zinc-400 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:underline"
                                    spy={true} smooth={true} offset={-50} duration={500}>Habilidades</Link>
                              <Link to="proyects" className="block py-2 px-3 text-gray-900 rounded hover:bg-zinc-400 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:underline"
                                    spy={true} smooth={true} offset={-50} duration={500}>Proyectos</Link>
                              <Link to="contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-zinc-400 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:underline"
                                    spy={true} smooth={true} offset={-50} duration={500}>Contacto</Link>
                      </div>
                  </div>
              )}
          </nav>
         </div>
      </>
  )
}

export default Navbar
