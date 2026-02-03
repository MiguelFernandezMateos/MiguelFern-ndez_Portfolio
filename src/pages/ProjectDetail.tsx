import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, Globe, Database, Server, Layout } from 'lucide-react'

export function ProjectDetail() {
    return (
        <div className="container" style={{ paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: '4rem', textAlign: 'left' }}>
            <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                <ArrowLeft size={20} /> Volver a Proyectos
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div style={{ marginBottom: '2rem' }}>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Technical Deep Dive</span>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1rem' }}>CrossoverX</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.6' }}>
                        Una solución Full Stack integral que combina la robustez de Java en el backend con la versatilidad de TypeScript en el frontend.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
                    <a
                        href="https://github.com/MiguelFernandezMateos/CrossoverX"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: 'var(--bg-tertiary)',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '8px',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                    >
                        <Github size={18} /> View Code
                    </a>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--accent-primary)', color: 'white', padding: '0.8rem 1.5rem', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
                        <Globe size={18} /> Live Demo
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Arquitectura del Sistema</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7' }}>
                            CrossoverX está diseñado siguiendo una arquitectura de microservicios o modular (según implementación), separando claramente las responsabilidades entre el cliente y el servidor.
                        </p>

                        <div style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ padding: '0.8rem', backgroundColor: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', height: 'fit-content' }}>
                                    <Server size={24} color="var(--accent-primary)" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Backend (Java)</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                        Lógica de negocio robusta implementada en Java. Gestión de autenticación, procesamiento de datos y APIs RESTful.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ padding: '0.8rem', backgroundColor: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', height: 'fit-content' }}>
                                    <Database size={24} color="var(--accent-primary)" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Base de Datos (SQL)</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                        Esquema relacional optimizado para integridad de datos. Incluye scripts de inicialización (`BaseDatos.sql`) para un despliegue rápido.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ padding: '0.8rem', backgroundColor: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', height: 'fit-content' }}>
                                    <Layout size={24} color="var(--accent-primary)" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Frontend (TypeScript)</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                        Interfaz de usuario moderna y reactiva. Uso de TypeScript para garantizar tipado seguro y reducir errores en tiempo de ejecución.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Desafíos Técnicos</h2>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Integración fluida entre el backend Java y el frontend TypeScript.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Diseño y normalización de la base de datos SQL para escalar.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Implementación de patrones de diseño para mantener el código limpio y mantenible.</li>
                        </ul>
                    </div>

                    <div style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', height: 'fit-content', border: '1px solid var(--bg-tertiary)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Tech Stack</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {['Java', 'TypeScript', 'SQL', 'HTML5', 'CSS3'].map(tech => (
                                <span key={tech} style={{
                                    padding: '0.4rem 0.8rem',
                                    backgroundColor: 'var(--bg-primary)',
                                    border: '1px solid var(--bg-tertiary)',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem'
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}
