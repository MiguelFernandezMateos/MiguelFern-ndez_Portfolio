import { ProjectCard } from '../components/ProjectCard'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const PROJECTS = [
  {
    id: 'crossover-x',
    title: 'CrossoverX',
    description: 'Aplicación Full Stack desarrollada con Java y TypeScript. Incluye gestión de base de datos SQL y arquitectura moderna de frontend.',
    tags: ['Java', 'TypeScript', 'SQL', 'Full Stack'],
    repoUrl: 'https://github.com/MiguelFernandezMateos/CrossoverX',
    imageUrl: 'https://external-preview.redd.it/qW5sXZSe_7w815bbdJh3mwhzBxyEdK13fFyRs3_8ZdQ.jpg?width=640&crop=smart&auto=webp&s=53d250c9db70f2b0fe7a93de0cf57e7f7ffc2a06'
  },
  {
    id: 'ascensor-social',
    title: 'Ascensor Social',
    description: 'Aplicación web progresiva desarrollada con Angular CLI. Enfocada en la accesibilidad y el impacto social.',
    tags: ['Angular', 'TypeScript', 'HTML/CSS'],
    repoUrl: 'https://github.com/MiguelFernandezMateos/AscensorSocial',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AfUaLEPJJwkMD50ehU31SuBwqNOjAl0KCA&s'
  }
]

export function Projects() {
  return (
    <div className="container" style={{ paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: '4rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'left' }} className="gradient-text">Proyectos Destacados</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', textAlign: 'left', maxWidth: '600px' }}>
          Una selección de proyectos personales y académicos que demuestran mis habilidades en desarrollo full stack.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {PROJECTS.map(({ repoUrl, ...project }) => (
            <div key={project.id} style={{ position: 'relative' }}>
              <ProjectCard {...project} repoUrl={repoUrl} />
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.5rem',
                  backgroundColor: 'var(--bg-tertiary)',
                  borderRadius: '50%',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
              >
                <Github size={20} />
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
