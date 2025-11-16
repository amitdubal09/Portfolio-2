import { useState } from 'react'
import Header from './component/header.jsx';
import Hero from './component/hero.jsx';
import About from './component/about.jsx';
import Contact from './component/contact.jsx';
import Footer from './component/footer.jsx';
import Service from './component/service.jsx';
import Projects from './component/projects.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
