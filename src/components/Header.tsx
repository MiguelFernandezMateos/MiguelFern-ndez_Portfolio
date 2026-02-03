import { Link, useLocation } from 'react-router-dom'
import { FileText, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useScroll } from '../hooks/useScroll'

export function Header() {
    const scrolled = useScroll()
    const location = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const isActive = (path: string) => location.pathname === path

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Proyectos', path: '/projects' },
        { name: 'Contacto', path: '/contact' },
    ]

    return (
        <header
            style={{
                height: 'var(--header-height)',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                backdropFilter: 'blur(10px)',
                backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
                borderBottom: scrolled ? '1px solid var(--bg-tertiary)' : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }}>
                    {/* Header Profile Pic - Small */}
                    <div
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--bg-tertiary)',
                            overflow: 'hidden',
                            border: '1px solid var(--bg-tertiary)'
                        }}
                    >
                        <img src="/fotoCV (2).jpg" alt="Miguel Fernández" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Miguel Fernández</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            style={{
                                color: isActive(link.path) ? 'var(--accent-primary)' : 'var(--text-secondary)',
                                fontWeight: isActive(link.path) ? 600 : 400,
                                fontSize: '0.95rem',
                                transition: 'color 0.2s'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--bg-tertiary)' }} />

                    <a
                        href="https://github.com/MiguelFernandezMateos"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'var(--text-primary)',
                            transition: 'opacity 0.2s'
                        }}
                    >
                        <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>
                    <Link
                        to="/cv"
                        style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: 'var(--text-primary)',
                            color: 'var(--bg-primary)',
                            borderRadius: '6px',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            textDecoration: 'none'
                        }}
                    >
                        CV <FileText size={16} />
                    </Link>
                </nav>
            </div>
        </header>
    )
}
