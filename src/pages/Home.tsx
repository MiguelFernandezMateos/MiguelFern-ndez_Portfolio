import { motion } from 'framer-motion'
import { Code2, GraduationCap, Languages, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <div className="container" style={{ paddingTop: 'calc(var(--header-height) + 4rem)', paddingBottom: '4rem' }}>
            <section
                id="home"
                style={{
                    minHeight: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                {/* Background Glow */}
                <div
                    style={{
                        position: 'absolute',
                        top: '20%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                        zIndex: -1,
                        opacity: 0.6
                    }}
                />

                <div className="responsive-grid hero-reverse-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', gap: '4rem', alignItems: 'center', width: '100%' }}>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'left' }}
                    >
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.4rem 1rem',
                                borderRadius: '20px',
                                backgroundColor: 'var(--bg-secondary)',
                                border: '1px solid var(--bg-tertiary)',
                                marginBottom: '1.5rem',
                                fontSize: '0.9rem',
                                color: 'var(--accent-primary)'
                            }}
                        >
                            <Code2 size={16} />
                            <span>Desarrollador Web Full Stack en formación</span>
                        </div>

                        <h1 style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem' }} className="gradient-text">
                            Miguel <br /> Fernández
                        </h1>

                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: '1.6' }}>
                            Estudiante del ciclo superior en Desarrollo de Aplicaciones Multiplataforma. Con amplio manejo de lenguajes informáticos y desarrollo de interfaces.<br /><br />
                            Poseo un buen nivel de inglés, una fácil adaptabilidad a entornos nuevos y buen manejo de la presión.<br />
                            Gran capacidad de aprendizaje y excelente trabajo en equipo.
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                <GraduationCap size={20} color="var(--accent-primary)" />
                                <span>Estudiante DAM</span>
                            </div>
                            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--bg-tertiary)' }} />
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                <Languages size={20} color="var(--accent-primary)" />
                                <span>Inglés B2+</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link to="/contact">
                                <button style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    backgroundColor: 'var(--accent-primary)',
                                    color: 'white'
                                }}>
                                    <Mail size={18} /> Contáctame
                                </button>
                            </Link>
                            <Link to="/projects">
                                <button style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                                    Ver Proyectos
                                </button>
                            </Link>
                        </div>

                    </motion.div>

                </div>
            </section>

            <section style={{ marginTop: '6rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'left' }}>Frontend Stack</h2>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {['React', 'TypeScript', 'Tailwind', 'Vite', 'Node.js', 'Figma'].map(tech => (
                        <div key={tech} style={{
                            padding: '1rem 2rem',
                            backgroundColor: 'var(--bg-secondary)',
                            border: '1px solid var(--bg-tertiary)',
                            borderRadius: '12px',
                            fontWeight: 500,
                            color: 'var(--text-secondary)'
                        }}>
                            {tech}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
