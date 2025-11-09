import Navbar from './component/Navbar';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {

  return (
    <>
      <Navbar />

      <section id="about" className="section-spacing-first">
        <About />
      </section>

      <hr className="section-divider" />

      <section id="skills" className="section-spacing">
        <Skills />
      </section>

      <hr className="section-divider" />

      <section id="projects" className="section-spacing">
        <Projects />
      </section>

      <hr className="section-divider" />

      <section id="contact" className="section-spacing">
        <Contact />
      </section>

      <Footer />
    </>
  )
}

export default App;