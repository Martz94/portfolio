import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { IoRemoveOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <>
            <div className=" container mx-auto max-w-screen-lg min-h-screen">
            <h3 className=' text-sky-700 decoration-4 decoration-sky-700 z-10 font-medium text-4xl text-center pt-20 pb-0'>Contacto</h3>
            <IoRemoveOutline className='text-sky-700 mx-auto h-10 w-20 pt-0 mb-10 hover:text-sky-700'/>
                <div className=' flex gap-10'>
                    <form target="_blank" action="https://formsubmit.co/urielmartzpascual@gmail.com" method="POST" className=' mx-auto w-1/2'>
                        <div className=" group mx-auto w-full">
                            <div className=" row-auto">
                                <div className=" col-auto my-2">
                                    <input type="text" name="name" className=" w-full p-2 rounded-md bg-zinc-700 text-white" placeholder=" Nombre Completo" required></input>
                                </div>
                                <div class="col-auto my-2">
                                    <input type="email" name="email" className=" w-full p-2 rounded-md bg-zinc-700 text-white" placeholder="e-mail" required></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Escribir mensaje..." className=" w-full p-2 rounded-md bg-zinc-700 text-white" name="message" rows="10" required></textarea>
                        </div>
                        <button type="submit" className=" bg-sky-700 py-2.5 px-10 my-5 text-zinc-300 hover:bg-zinc-800 hover:text-sky-700 border border-transparent hover:border-sky-700 rounded-md shadow-lg hover:shadow-sky-700">Enviar</button>
                    </form>
                    <div className=' w-1/2 text-zinc-300'>
                        <p className=' text-xl text-zinc-300 mb-10'>Escribe un mensaje, llama o contactame atraves de mis redes sociales.</p>
                        <div className='mt-24 mb-0'>
                        <a href="https://www.linkedin.com/in/uriel-martinez-41ab2a116/" className=' flex gap-3 my-7 items-center hover:text-sky-700'> <BsLinkedin className=" w-8 h-8" />Uriel Martinez</a>
                        <a href="https://github.com/Martz94" className=' flex gap-3 my-7 items-center hover:text-sky-700'><BsGithub className=" w-8 h-8" />Martz94</a>
                        <a href="https://mail.google.com/" className=' flex gap-3 my-7 items-center hover:text-sky-700'><AiTwotoneMail className=" w-8 h-8" />urielmartzpascual@gmail.com</a>
                        <a href="" className=' flex gap-3 my-7 items-center hover:text-sky-700'><BsTelephoneForwardFill className=' w-7 h-7'/><p>921 123 75 12</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
