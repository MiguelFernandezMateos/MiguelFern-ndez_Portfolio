import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import CV from './components/CV.tsx'
import { Home } from './pages/Home.tsx'
import { Projects } from './pages/Projects.tsx'
import { ProjectDetail } from './pages/ProjectDetail.tsx'
import { Contact } from './pages/Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
