export function Footer() {
    return (
        <footer style={{
            padding: '2rem 0',
            borderTop: '1px solid var(--bg-tertiary)',
            marginTop: 'auto',
            backgroundColor: 'var(--bg-secondary)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <span style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Miguel Fernández.
                </span>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="https://github.com/MiguelFernandezMateos" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>GitHub</a>
                    <a href="mailto:miguelfdez0505@gmail.com" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email</a>
                    <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}
