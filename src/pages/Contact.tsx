import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github } from 'lucide-react'

export function Contact() {
    return (
        <div className="container" style={{ paddingTop: 'calc(var(--header-height) + 4rem)', paddingBottom: '4rem' }}>
            <div className="responsive-grid hero-reverse-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ textAlign: 'left' }}
                >
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1.5rem' }} className="gradient-text">Hablemos</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6' }}>
                        Estoy interesado en oportunidades de desarrollo frontend y full stack.
                        Escanea el QR para llevarte mi contacto o envíame un mensaje directo.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <a href="mailto:miguelfdez0505@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--bg-tertiary)' }}>
                            <Mail color="var(--accent-primary)" />
                            <div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>Email</div>
                                <div style={{ fontWeight: 500 }}>miguelfdez0505@gmail.com</div>
                            </div>
                        </a>

                        <a href="https://github.com/MiguelFernandezMateos" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--bg-tertiary)' }}>
                            <Github color="var(--accent-primary)" />
                            <div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>GitHub</div>
                                <div style={{ fontWeight: 500 }}>MiguelFernandezMateos</div>
                            </div>
                        </a>
                        <a href="tel:+34639096453" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--bg-tertiary)' }}>
                            <Phone color="var(--accent-primary)" />
                            <div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>Teléfono</div>
                                <div style={{ fontWeight: 500 }}>+34 639096453</div>
                            </div>
                        </a>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--bg-tertiary)' }}>
                            <MapPin color="var(--accent-primary)" />
                            <div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>Ubicación</div>
                                <div style={{ fontWeight: 500 }}>Madrid, España</div>
                            </div>
                        </div>


                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <div style={{
                        padding: '2rem',
                        backgroundColor: 'white',
                        borderRadius: '24px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }}>
                        <img
                            src="/QR.png"
                            alt="Scan for content"
                            style={{
                                width: '300px',
                                height: '300px',
                                objectFit: 'contain'
                            }}
                        />
                        <div style={{ marginTop: '1.5rem', textAlign: 'center', color: 'black', fontWeight: 600 }}>
                            Miguel Fernández
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}
