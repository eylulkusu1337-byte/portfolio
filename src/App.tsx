import { useState } from 'react'
import Nav from './components/Nav/Nav'
import "./main.scss";
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Footer from './components/Contact/Footer.tsx';
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Project />
      <Footer />
 
    </>
  )
}

export default App
