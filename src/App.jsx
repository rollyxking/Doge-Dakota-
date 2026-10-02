import { Marquee } from './components/Marquee'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Join } from './components/Join'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div>
      <Marquee />
      <Nav />
      <main>
        <Hero />
        <About />
        <Join />
      </main>
      <Footer />
    </div>
  )
}
