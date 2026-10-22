import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Profile from './components/Profile/Profile'
import Stack from './components/Stack/Stack'
import Experience from './components/Experience/Experience'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Stack />
        <Experience />
      </main>
    </div>
  )
}

export default App;