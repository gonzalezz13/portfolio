import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Profile />
      </main>
    </div>
  )
}

export default App;