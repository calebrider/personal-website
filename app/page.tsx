import About from './components/about/page'
import Contact from './components/contact/page'
import Navigation from './components/navigation/page'
import Projects from './components/projects/page'
import Skills from './components/skills/page'

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function Home() {
  return (
    <main className={`flex flex-col items-center min-h-screen bg-white ${poppins.variable} font-sans`}>
      <Navigation/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  )
}
