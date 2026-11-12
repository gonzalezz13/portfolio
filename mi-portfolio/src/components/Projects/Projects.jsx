import './Projects.css'

function Projects() {
    return (
        <section className="projects section" id="proyectos">
            <div className="container">
                <span className="section-label">03 // PROYECTOS</span>
                <h2 className="section-title">Proyectos realizados</h2>
                <div className="projects__start">
                    <p className="projects__intro">
                        Trabajos recientes y colaboraciones prácticas. Desarrollo web directo enfocado en resolver necesidades reales con código estructurado y mantenible.
                    </p>
                    <p className="projects__counter"><span className="projects__signs">&lt; &gt;</span>2 proyectos prácticos</p>
                </div>

            </div>
        </section >
    )
}

export default Projects