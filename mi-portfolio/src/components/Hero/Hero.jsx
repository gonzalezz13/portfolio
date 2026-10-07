import './Hero.css'

function Hero() {
    return (
        <section className="hero section">
            <div className="container">
                <div className="hero__badge">
                    <span className="hero__badge-dot"></span>
                    Valencia, España
                    <span className="hero__badge-tag"></span>
                    Disponible para incoroporación inmediata
                </div>

                <h1 className="hero__title">Vicente Arnal González</h1>
                <p className="hero__subtitle">Desarrollador Web Junior</p>
                <p className="hero__description">Creo aplicaciones web pensadas para resolver necesidades reales, desde la idea hasta que están en línea y funcionando. Cuido que el código sea claro y que la experiencia sea sencilla para quien la use.</p>

                <div className="hero__terminal">
                    <div className="hero__terminal-header">
                        <div className="hero__terminal-dots">
                            <span></span><span></span><span></span>
                        </div>
                        <span className="hero__terminal-title">terminal — bash</span>
                        <span className="hero__terminal-status">status: ready</span>
                    </div>
                    <div className="hero__terminal-body">
                        <p><span className="hero__terminal-prompt">$</span> whoami → vicente.arnal (full-stack junior)</p>
                        <p><span className="hero__terminal-prompt">$</span> stack --primary → ["JavaScript", "PHP 8", "Laravel", "MySQL", "REST APIs"]</p>
                        <p><span className="hero__terminal-prompt">$</span> current-target → "Aportar valor técnico a equipo ágil de desarrollo"</p>
                    </div>
                </div>

                <div className="hero__actions">
                    <a href="#proyectos" className="btn btn--primary">Ver mi trabajo</a>
                    <a href="#contacto" className="btn btn--outlined">Contactar y CV</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;