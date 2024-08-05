import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div class="flex max-w-screen-lg mx-auto">
        <div class=" mt-36">
          <h5 class="text-sky-600 text-4xl my-3">Hi, i'm</h5>
          <h1 class="text-white text-8xl font-bold my-3">URIEL </h1>
          <h1 class="text-white text-8xl font-bold my-3">MARTINEZ</h1>
          <h5 class="text-slate-400 text-4xl my-5">Web Developer</h5>
          <div class=" bg-zinc-800 py-3 px-6  text-white rounded-s-full flex mt-20 ms-auto gap-3 justify-between">
            <BsLinkedin class=" w-10 h-10"/>
            <BsGithub class=" w-10 h-10"/>
            <AiTwotoneMail class=" w-11 h-11"/>
          </div>
        </div>
        
        <img src="/fotoperfil.png" alt="foto-1" class=" max-w-lg" />

      </div>
    </>
  )
}

export default Home
