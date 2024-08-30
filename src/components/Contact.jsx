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
                        <p className=' text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-8'>Comunícate y en breve te responderé.</p>
                        <p className=' text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-2'>Ciudad de México</p>
                        <p className=' text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-2'>Desarrollador Web</p>
                        <p className=' text-base md:text-lg text-zinc-700 dark:text-zinc-300 mb-5'>Freelancer</p>
                        <div className=' lg:mt-10 mb-0'>
                            <a href="https://www.linkedin.com/in/uriel-martinez-41ab2a116/" className=' text-sky-700 dark:text-sky-700 flex gap-3 my-7 items-center text-sm lg:text-base hover:text-zinc-700 dark:hover:text-zinc-300'> <BsLinkedin className=" w-8 h-8" />LINKEDIN</a>
                            <a href="https://github.com/Martz94" className=' text-sky-700 dark:text-sky-700 flex gap-3 my-7 items-center text-sm lg:text-base hover:text-zinc-700 dark:hover:text-zinc-300'><BsGithub className=" w-8 h-8" />GITHUB</a>
                            <a href="mailto:urielmartzpascual@gmail.com?Subject=Hola,%20Estoy%20interesado(a)%20en%20tu%20perfil" className=' text-sky-700 dark:text-sky-700  flex gap-3 my-7 items-center text-sm lg:text-base hover:text-zinc-700 dark:hover:text-zinc-300'><AiTwotoneMail className=" w-8 h-8" /> E-MAIL</a>
                            <a href="tel:9211237512" className=" flex items-center text-sky-700 mt-7 hover:text-zinc-700 dark:hover:text-zinc-300 pe-2 gap-3 cursor-pointer text-sm lg:text-base">
                                <BsTelephoneForwardFill className=' h-7 w-7' />CONTACTAR
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
