import { motion } from 'framer-motion'
import { Download, ArrowLeft } from 'lucide-react'
import { useState, useEffect } from 'react'

function CV() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="min-h-screen">
            {/* Header (Duplicated from App.tsx) */}
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {/* Header Profile Pic - Small */}
                        <div
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--bg-tertiary)',
                                overflow: 'hidden',
                                border: '1px solid var(--bg-tertiary)'
                            }}
                        >
                            <img src="/fotoCV (2).jpg" alt="Miguel Fernández" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Miguel Fernández</span>
                    </div>

                    <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <a href="/" style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <ArrowLeft size={16} /> Volver
                        </a>
                    </nav>
                </div>
            </header>

            <main style={{ paddingTop: 'calc(var(--header-height) + 2rem)', paddingBottom: '4rem' }}>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ width: '100%', textAlign: 'center' }}
                    >
                        <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Curriculum Vitae</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Previsualización y descarga</p>
                    </motion.div>

                    {/* PDF Viewer */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            width: '100%',
                            maxWidth: '900px',
                            height: '80vh',
                            backgroundColor: 'var(--bg-secondary)',
                            borderRadius: '12px',
                            border: '1px solid var(--bg-tertiary)',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        <iframe
                            src="/Miguel Fernández Mateos.pdf"
                            style={{ width: '100%', height: '100%', border: 'none' }}
                            title="CV Preview"
                        />
                    </motion.div>

                    {/* Download Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <a
                            href="/Miguel Fernández Mateos.pdf"
                            download="Miguel_Fernandez_CV.pdf"
                            style={{
                                padding: '1rem 2rem',
                                backgroundColor: 'var(--accent-primary)',
                                color: 'white',
                                borderRadius: '12px',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                fontSize: '1.1rem',
                                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)'
                            }}
                        >
                            <Download size={24} />
                            Descargar PDF
                        </a>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}

export default CV
