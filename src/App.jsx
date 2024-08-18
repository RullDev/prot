import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './navbar.jsx'
import MainSection from './main.jsx'
import AboutSection from './about.jsx'
import SkillsSection from './skills.jsx'
import ProjectSection from './projects.jsx'
import Contact from './contact.jsx'
import Footer from './footer.jsx'

export default function App() {
  return (
    <div className="App bg-black text-light">
    <Navbar />
    <MainSection />
    <AboutSection />
    <SkillsSection />
    <ProjectSection />
    <Contact />
    <Footer />
    </div>
  )
}
