import About from './components/about/page'
import Contact from './components/contact/page'
import Navigation from './components/navigation/page'
import Projects from './components/projects/page'
import Skills from './components/skills/page'

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white">
      <span className='flex justify-center px-10 bg-red-600 font-bold text-white w-full'>
        Note: This website is a work in progress. Some information/links may be missing and/or incomplete :)
      </span>
      <Navigation/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  )
}
