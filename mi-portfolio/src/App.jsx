import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Profile from './components/Profile/Profile'
import Stack from './components/Stack/Stack'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;