import { Suspense, lazy } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Background from '@/components/layout/Background'
import CustomCursor from '@/components/ui/CustomCursor'

const About = lazy(() => import('@/components/sections/About'))
const Skills = lazy(() => import('@/components/sections/Skills'))
const Projects = lazy(() => import('@/components/sections/Projects'))
const Contact = lazy(() => import('@/components/sections/Contact'))

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-violet-500 border-t-transparent" />
    </div>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-text-primary overflow-x-hidden grain">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 z-50 rounded-xl bg-violet-600 px-4 py-2 text-white"
      >
        Aller au contenu principal
      </a>
      <Background />
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
