import './Projects.css'
import { BsWrenchAdjustableCircleFill } from "react-icons/bs";


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
                    <p className="projects__counter"><span className="projects__signs">&lt;&gt;</span>2 proyectos prácticos</p>
                </div>

                <div className="projects__grid">
                    <div className="projects__grid-first">
                        <img src="public/preview_peluqueria.png" alt="Preview Demo Peluquería"></img>
                        <div className="projects__grid-contribution">
                            <p className="projects__grid-note">Aprendizaje clave:</p>
                            <p className="projects__grid-result">Priorizar la tasa de conversión y claridad informativa sobre florituras innecesarias: CTA siempre visibles.</p>
                        </div>
                    </div>
                    <div className="projects__grid-second">
                        <div className="projects__grid-beginning">
                            <p className="projects__grid-role">PROYECTO PERSONAL DEMOSTRATIVO</p>
                            <span className="projects__grid-note">Para negocios locales</span>
                        </div>

                        <h3>Barbería Tradicional (Demo Web & CTAs)</h3>
                        <p className="projects__grid-desc">Maquetación web orientada a captación directa y reserva de citas vía Whatsapp.
                            Accesible con enfoque mobile-first e interactividad optimizada </p>

                        <p className="projects__grid-quote"><span style={{ color: 'var(--color-primary)' }}><BsWrenchAdjustableCircleFill />
                        </span>IMPLEMENTACIÓN TÉCNICA:</p>
                    </div>
                </div>

                <div className="projects__grid">
                    <div className="projects__grid-first">
                        <img src="public/preview_velas.png" alt="Preview Tienda Shopify Velas de Llum"></img>
                        <div className="projects__grid-contribution">
                            <p className="projects__grid-note">Valor aportado:</p>
                            <p className="projects__grid-result">Traslado de especificaciones comerciales reales a una plataforma autosuficiente y totalmente operativa como Shopify.</p>
                        </div>
                    </div>
                    <div className="projects__grid-second">

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Projects