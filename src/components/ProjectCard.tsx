import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ProjectCardProps {
    id: string
    title: string
    description: string
    tags: string[]
}

export function ProjectCard({ id, title, description, tags }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--bg-tertiary)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <div style={{
                width: '100%',
                height: '200px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid var(--bg-tertiary)'
            }}>
                <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <span style={{ fontSize: '1.5rem', opacity: 0.5 }}>⚡</span>
                </div>
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                    {description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.8rem',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '20px',
                            backgroundColor: 'var(--bg-tertiary)',
                            color: 'var(--text-secondary)'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>

                <Link
                    to={`/projects/${id}`}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--accent-primary)',
                        fontWeight: 500,
                        fontSize: '0.95rem'
                    }}
                >
                    View Technical Deep Dive <ArrowUpRight size={16} />
                </Link>
            </div>
        </motion.div>
    )
}
