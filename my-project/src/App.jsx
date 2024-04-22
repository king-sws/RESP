import Companies from "./components/Companies"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Started from "./components/Started"
import Switch from "./components/Switch"
import Value from "./components/Value"

const App = () => {
  return (
    <div className="overflow-x-hidden " >
      <Navbar />
      <Hero />
      <Companies />
      <Switch />
      <Value />
      <Contact />
      <Started />
      <Footer />
    </div>
  )
}

export default App