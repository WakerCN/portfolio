import Nav from './components/Nav'
import Hero from './components/Hero'
import SkillMatrix from './components/SkillMatrix'
import ProjectGrid from './components/ProjectGrid'
import CaseStudy from './components/CaseStudy'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <SkillMatrix />
      <ProjectGrid />
      <CaseStudy />
      <Contact />
    </div>
  )
}

export default App
