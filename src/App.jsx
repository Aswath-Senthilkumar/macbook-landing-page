import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Viewer from './components/Viewer'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Showcase from './components/Showcase'
import Performance from './components/Performance'
import Features from './components/Features'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Viewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App