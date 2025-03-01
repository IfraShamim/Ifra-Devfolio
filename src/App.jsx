import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <div className="relative dark:bg-[url('/2.jpg')] bg-[url('/spash-white.jpg')] bg-cover bg-center">
        <Navbar />
        <Home />
      </div>
      <div className="relative dark:bg-[#3E4454] bg-primaryColor bg-[url('/paint4.png')] bg-cover bg-center">
        <About />
      </div>
      <div
        className="relative dark:bg-[#3E4454] bg-primaryColor  bg-[url('/paint2.png')] bg-cover bg-center"
      >
        <Skills />
        <Projects />
      </div>
      <div className="relative dark:bg-[#3E4454] bg-primaryColor  bg-[url('/paint1.png')] bg-contain bg-no-repeat">
        <Contact />
      </div>
    </div>
  )
}

export default App