import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AboutMe from './components/Aboutme'
import Skills from './components/skills'
import Projects from './components/projects'
import Recommendations from './components/recomendations'
import NewRecomendationAndForm from './components/NewRecomendationandForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Recommendations/>
    <NewRecomendationAndForm/>
    </>
  )
}

export default App
