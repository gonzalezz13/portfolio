import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Profile from './components/Profile/Profile'
import Stack from './components/Stack/Stack'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;