import { useLenis } from './hooks/useLenis'
import Header from './components/ui/Header'
import Hero from './components/ui/Hero'
import Services from './components/ui/Services'
import About from './components/ui/About'
import Portfolio from './components/ui/Portfolio'
import Advantages from './components/ui/Advantages'
import ZoneIntervention from './components/ui/ZoneIntervention'
import Engagement from './components/ui/Engagement'
import Testimonials from './components/ui/Testimonials'
import Contact from './components/ui/Contact'
import Footer from './components/ui/Footer'

export default function App() {
  useLenis()
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Advantages />
        <ZoneIntervention />
        <Engagement />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
