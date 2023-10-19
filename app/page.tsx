import About from './components/about/page'
import Contact from './components/contact/page'
import Projects from './components/projects/page'
import Skills from './components/skills/page'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-evenly bg-slate-100">
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  )
}
