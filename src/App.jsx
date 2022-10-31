import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Projects from "./pages/Projects"
import Visualization from "./pages/Visualization"
import Template from './components/Template';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Community from './pages/Community';
import Budgets from './pages/Budgets';
import ProjectsProvider, { ProjectsContext } from './_contexts/ProjectsContext';
import './index.css';

function App() {
  return (
    <ProjectsContext.Provider value={ProjectsProvider()}>
      <Router>
        <Routes>
          <Route path="/" element={<Template/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="visualization" element={<Visualization/>}/>
            <Route path="community-dev-plan" element={<Community/>}/>
            <Route path="budgets" element={<Budgets/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </Router>
    </ProjectsContext.Provider>
  )
}

export default App