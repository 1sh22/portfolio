import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Experience from "../components/sections/Experience"
import Projects from "../components/sections/Projects"
import Education from "../components/sections/Education"
import Footer from "../components/sections/Footer"
import { PAD } from "../styles/globalStyles"

export default function Home() {
  return (
    <>
      <div style={{ padding: `0 ${PAD}` }}>
        <Hero />
        <About />
        <Experience />
      </div>
      <Projects />
      <div style={{ padding: `0 ${PAD}` }}>
        <Education />
      </div>
      <Footer />
    </>
  )
}
