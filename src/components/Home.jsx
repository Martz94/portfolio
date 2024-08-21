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
        "Front-End"
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 2000,
});

  return (
    <>
    <div id='/' className="relative flex items-center justify-center overflow-hidden scroll-mt-[80rem]">
      <video src="/video-bg1.mp4" autoPlay="{true}" loop muted className="absolute w-auto min-w-full object-fill lg:object-contain h-full lg:h-auto max-w-none opacity-30 dark:opacity-100" ></video>
      <div className=" block lg:flex max-w-screen-lg px-5 md:mx-auto gap-5 z-10">
        <div className=" mt-36 z-20 sm:mx-auto ms-16 lg:pt-0 md:ps-0">
          <h5 className=" text-sky-600 text-2xl lg:text-4xl my-3 ps-10 md:ps-0 md:mx-auto">{text}<Cursor cursorBlinking cursorStyle="|" cursorColor="#fff" /></h5>
          <h1 className=" text-white dark:text-zinc-200 text-4xl md:text-8xl font-bold my-3 animate-flip-down animate-once animate-duration-[3000ms] ms-10 md:mx-auto">URIEL </h1>
          <h1 className=" text-white dark:text-zinc-200 text-4xl md:text-8xl font-bold my-3 ms-10 md:mx-auto">MARTINEZ</h1>
          <h5 className=" text-sky-700 dark:text-gray-400 text-2xl lg:text-4xl my-5 animate-pulse animate-infinite animate-duration-[3000ms] ms-10 md:mx-auto ">Desarrollador Web</h5>
          <div className=" ms-10 md:ms-0 py-3 gap-5 text-white flex mt-14 sm:justify-between justify-start">
            <a href="https://www.linkedin.com/in/uriel-martinez-41ab2a116/"> <BsLinkedin className=" w-10 h-10 animate-rotate-y animate-infinite animate-duration-[3000ms] hover:text-sky-700"/></a> 
            <a href="https://github.com/Martz94"><BsGithub className=" w-10 h-10 animate-rotate-y animate-infinite animate-duration-[3000ms] hover:text-sky-700"/></a>
            <a href="https://mail.google.com/"><AiTwotoneMail className=" w-11 h-11 animate-rotate-y animate-infinite animate-duration-[3000ms] hover:text-sky-700"/></a> 
          </div>
        </div>
        <div></div>   
        <img src="/fotoperfil2.jpg" alt="foto-1" className=" invisible max-w-lg animate-fade-left animate-once animate-duration-[3000ms] text-opacity-70" />
      </div> 
      </div>
    </>
  )
}

export default Home
