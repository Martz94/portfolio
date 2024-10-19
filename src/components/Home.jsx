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
        "Me presento"
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 500,
});

  return (
    <>
      <div id='/' className="relative flex items-center justify-center overflow-hidden scroll-mt-[80rem]">
        <video src="/video-bg1.mp4" autoPlay="{true}" loop muted className="absolute w-auto min-w-full object-fill lg:object-contain h-full lg:h-auto max-w-none opacity-50 dark:opacity-100" ></video>
        <div className=" md:-mb-2 block md:flex max-w-screen-lg px-5 md:mx-auto gap-5 z-10">
          <div className=" mt-36 z-20 sm:mx-auto px-2 ms-10 lg:pt-0">
            <h5 className=" text-sky-800 text-2xl sm:text-4xl my-3 ps-10 md:ps-0 md:mx-auto">{text}<Cursor cursorBlinking cursorStyle="|" cursorColor="#fff" /></h5>
            <h1 className=" text-white dark:text-zinc-200 text-5xl sm:text-6xl xl:text-8xl font-bold my-3 animate-fade-right animate-once ms-10 md:mx-auto">URIEL </h1>
            <h1 className=" text-white dark:text-zinc-200 text-5xl sm:text-6xl xl:text-8xl font-bold my-3 animate-fade-right animate-once ms-10 md:mx-auto">MARTINEZ</h1>
            <h5 className=" text-sky-700 dark:text-gray-400 text-2xl sm:text-4xl my-5 animate-bounce animate-infinite ms-10 md:mx-auto ">Desarrollador Web</h5>
            <div className=" ms-10 md:ms-0 pt-3 gap-5 text-white flex mt-14 lg:justify-between justify-start">
              <a href="https://www.linkedin.com/in/uriel-martinez-pascual-41ab2a116/"  target="_blank"> <BsLinkedin className=" w-10 h-10 animate-pulse animate-infinite animate-duration-[3000ms] hover:text-sky-700"/></a>
              <a href="https://github.com/Martz94"  target="_blank"><BsGithub className=" w-10 h-10 animate-pulse animate-infinite animate-duration-[3000ms] hover:text-sky-700"/></a>
              <a href="mailto:urielmartzpascual@gmail.com?Subject=Hola,%20Estoy%20interesado(a)%20en%20tu%20perfil"  target="_blank"><AiTwotoneMail className=" w-11 h-11 animate-pulse animate-infinite animate-duration-[3000ms] hover:text-sky-700"  target="_blank"/></a>
            </div>
          </div>
          <div>
            <img src="/foto-perfil.png" alt="foto-1" className=" -mt-5 md:mt-0 max-w-md animate-fade-left animate-once animate-duration-[3000ms] transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 px-2" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
