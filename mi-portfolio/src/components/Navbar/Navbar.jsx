import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__inner container">
                <div className="navbar__brand">
                    <span className="navbar__logo">VG</span>
                    <span className="navbar__name">Vicente Arnal González</span>
                </div>
                <div className="navbar__status">
                    <span className="navbar__status-dot"></span>
                    Disponible para trabajar / Valencia, ES
                </div>
                <ul className="navbar__links">
                    <li><a href="#sobre-mi">Sobre mí</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#experiencia">Experiencia</a></li>
                    <li><a href="contacto">Contacto</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;