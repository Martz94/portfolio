import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {

  const [text] = useTypewriter({
    words: [
        "Hola",
        "Bienvenido",
        "Soy "
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 2000,
});

  return (
    <>
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <video src="/video-bg1.mp4" autoPlay="{true}" loop muted className="absolute pt-20 w-auto min-w-full object-contain h-auto max-w-none" ></video>
      <div className="flex max-w-screen-lg mx-auto gap-5 z-10">
        <div className=" mt-36 z-20">
          <h5 className=" text-sky-600 text-4xl my-3">{text}<Cursor cursorBlinking cursorStyle="|" cursorColor="#fff" /></h5>
          <h1 className="text-white text-8xl font-bold my-3 animate-flip-down animate-once animate-duration-[3000ms]">URIEL </h1>
          <h1 className="text-white text-8xl font-bold my-3">MARTINEZ</h1>
          <h5 className="text-gray-400 text-4xl my-5 animate-pulse animate-infinite animate-duration-[3000ms]">Web Developer</h5>
          <div className=" py-3 px-6  text-white flex mt-20 justify-between">
            <a href=""> <BsLinkedin className=" w-10 h-10 animate-rotate-y animate-infinite animate-duration-[3000ms] hover:text-sky-700"/></a> 
            <a href="https://github.com/Martz94"><BsGithub className=" w-10 h-10 animate-rotate-y animate-infinite animate-duration-[3000ms] hover:text-sky-700"/></a>
            <AiTwotoneMail className=" w-11 h-11 animate-rotate-y animate-infinite animate-duration-[3000ms] hover:text-sky-700"/>
          </div>
        </div>   
        <img src="/fotoperfil2.jpg" alt="foto-1" className=" max-w-lg animate-fade-left animate-once animate-duration-[3000ms]" />
      </div> 
      </div>
    </>
  )
}

export default Home
