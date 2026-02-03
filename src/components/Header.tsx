import { Link, useLocation } from 'react-router-dom'
import { FileText, Menu, X, Home, Folder, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useScroll } from '../hooks/useScroll'
import { AnimatePresence, motion } from 'framer-motion'

export function Header() {
    const scrolled = useScroll()
    const location = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const isActive = (path: string) => location.pathname === path

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    const navLinks = [
        { name: 'Home', path: '/', icon: <Home size={20} /> },
        { name: 'Proyectos', path: '/projects', icon: <Folder size={20} /> },
        { name: 'Contacto', path: '/contact', icon: <Mail size={20} /> },
    ]

    return (
        <>
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
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit', zIndex: 60 }}>
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

                    {/* Mobile Toggle */}
                    <button
                        className="mobile-nav-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-primary)',
                            zIndex: 60,
                            padding: '0.5rem'
                        }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Side Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                position: 'fixed',
                                inset: 0,
                                backgroundColor: 'rgba(0,0,0,0.6)',
                                zIndex: 40,
                                backdropFilter: 'blur(4px)'
                            }}
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                width: '75%',
                                maxWidth: '300px',
                                backgroundColor: 'var(--accent-primary)', // Blue background as requested
                                zIndex: 50,
                                padding: '6rem 2rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2rem',
                                boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        style={{
                                            fontSize: '1.2rem',
                                            fontWeight: 600,
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            padding: '1rem',
                                            backgroundColor: isActive(link.path) ? 'rgba(255,255,255,0.2)' : 'transparent',
                                            borderRadius: '12px'
                                        }}
                                    >
                                        {link.icon}
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', width: '100%' }} />

                            <Link
                                to="/cv"
                                style={{
                                    padding: '1rem',
                                    backgroundColor: 'white',
                                    color: 'var(--accent-primary)',
                                    borderRadius: '12px',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                                }}
                            >
                                CV <FileText size={20} />
                            </Link>

                            <div style={{ marginTop: 'auto', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textAlign: 'center' }}>
                                Miguel Fernández © 2026
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
