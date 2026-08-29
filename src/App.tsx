import AnalystNote from './components/AnalystNote'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Nav from './components/Nav'
import Problem from './components/Problem'
import Process from './components/Process'
import SampleReport from './components/SampleReport'
import Scope from './components/Scope'
import Services from './components/Services'
import WhyTogether from './components/WhyTogether'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Metrics />
        <Services />
        <SampleReport />
        <WhyTogether />
        <Scope />
        <Process />
        <AnalystNote />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
