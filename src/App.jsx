
import Aboutme from './components/Aboutme'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Proyects from './components/Proyects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  
  const[ darkMode, setDarkMode] = useState(() => {
    if (window.matchMedia('( prefers-color-scheme: Oscuro)').matches){
      return "Oscuro"
    }
    return "Claro" 
  });

  const toggleDarkMode = () => { 
      setDarkMode(!darkMode);
  }
  
  return (
    <div className={`${darkMode && 'dark'}`}> 
     <div className=' bg-zinc-300 dark:bg-zinc-900'>
      I<Navbar />
      <Home />
      <Aboutme />
      <Proyects />
      <Skills />
      <Contact />
      <Footer />
      <button className=' fixed bottom-10 right-10 w-14 h-14 bg-zinc-900 dark:bg-neutral-200 text-slate-200 dark:text-slate-800 font-semibold text-sm rounded-full hover:opacity-75 z-50'
        onClick={toggleDarkMode}>{darkMode ? 'Claro' : 'Oscuro'}
      </button>
      </div>
    </div>
  )
}

export default App
