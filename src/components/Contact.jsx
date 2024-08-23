import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { IoRemoveOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <> <div className=' bg-zinc-400 dark:bg-zinc-800'>
            <div id='contact' className=" container mx-auto max-w-screen-lg pb-10 xl:min-h-screen px-5 sm:px-20 lg:px-5">
                <h3 className=' text-sky-700 decoration-4 decoration-sky-700 z-10 font-medium text-2xl lg:text-4xl text-center pt-20 pb-0'>Contacto</h3>
                <IoRemoveOutline className='text-sky-700 mx-auto h-10 w-20 pt-0 mb-10 hover:text-sky-700' />
                <div className=' block lg:flex gap-10'>
                    <form target="_blank" action="https://formsubmit.co/urielmartzpascual@gmail.com" method="POST" className=' mx-auto w-auto lg:w-1/2'>
                        <div className=" mx-auto w-full">
                            <div className=" row-auto">
                                <div className=" col-auto my-2">
                                    <input type="text" name="name" className=" w-full p-2 rounded-md bg-zinc-700 text-white" placeholder="Nombre Completo" required></input>
                                </div>
                                <div class="col-auto my-2">
                                    <input id="email" name="email" type="email" autocomplete="email" placeholder='Correo' required className=" w-full p-2 rounded-md bg-zinc-700 text-white" ></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Escribir Mensaje..." className=" w-full p-2 rounded-md bg-zinc-700 text-white" name="message" rows="10" required></textarea>
                        </div>
                        <button type="submit" className=" bg-sky-700 py-1 px-5 md:py-2 md;px-7 my-5 text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-800 hover:text-sky-700 border border-transparent hover:border-sky-700 rounded-md shadow-lg hover:shadow-sky-700">Enviar</button>
                    </form>
                    <div className=' w-auto lg:w-1/2 text-zinc-300 mx-auto mt-7 lg:mt-0 mb-5 lg:mb-5'>
                        <p className=' text-base md:text-xl text-zinc-700 dark:text-zinc-300 mb-10'>Escribe un mensaje, llama o contactame atraves de mis redes sociales.</p>
                        <div className=' lg:mt-24 lg:mb-0'>
                            <a href="https://www.linkedin.com/in/uriel-martinez-41ab2a116/" className=' text-zinc-700 dark:text-zinc-300 flex gap-3 my-7 items-center text-sm lg:text-base hover:text-sky-700'> <BsLinkedin className=" w-8 h-8" />LINKEDIN</a>
                            <a href="https://github.com/Martz94" className=' text-zinc-700 dark:text-zinc-300 flex gap-3 my-7 items-center text-sm lg:text-base hover:text-sky-700'><BsGithub className=" w-8 h-8" />GITHUB</a>
                            <a href="https://mail.google.com/" className=' text-zinc-700 dark:text-zinc-300 flex gap-3 my-7 items-center text-sm lg:text-base hover:text-sky-700'><AiTwotoneMail className=" w-8 h-8" />urielmartzpascual@gmail.com</a>
                            <div className=" flex items-center gap-3 text-sky-600 hover:text-zinc-700 dark:hover:text-white pe-2 cursor-pointer">
                                <BsTelephoneForwardFill className=' h-7 w-7' /><p className=' text-transparent hover:text-zinc-700 dark:hover:text-zinc-300'>921 123 75 12</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
