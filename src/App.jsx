import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Viewer from './components/Viewer'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Showcase from './components/Showcase'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Viewer />
      <Showcase />
    </main>
  )
}

export default App