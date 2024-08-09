import React from 'react'
import { BsTelephoneForwardFill } from "react-icons/bs";

const Navbar = () => {
  return (
      <>
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
                              <a href="#" className="block py-2 px-3  text-white bg-blue-700 rounded md:bg-transparent md:text-sky-600 md:p-0 dark:text-white md:dark:text-sky-600" aria-current="page">Home</a>
                          </li>
                          <li>
                              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                          </li>
                          <li>
                              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
                          </li>
                          <li>
                              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Proyects</a>
                          </li>
                          <li class=" me-5">
                                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
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

      </>
  )
}

export default Navbar
