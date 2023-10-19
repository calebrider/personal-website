import About from './components/about/page'
import Contact from './components/contact/page'
import Navigation from './components/navigation/page'
import Projects from './components/projects/page'
import Skills from './components/skills/page'

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white">
      <Navigation/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  )
}
