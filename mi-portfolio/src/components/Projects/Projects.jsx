import './Projects.css'
import { BsWrenchAdjustableCircleFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import { LuExternalLink, LuCode, LuEye, LuLock } from "react-icons/lu";

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
                        <img src="/preview_peluqueria.png" alt="Preview Demo Peluquería"></img>
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

                        <h4 className="projects__grid-quote">
                            <span style={{ color: 'var(--color-primary)' }}><BsWrenchAdjustableCircleFill /></span>
                            IMPLEMENTACIÓN TÉCNICA:
                        </h4>
                        <ul className="projects__tech-list">
                            <li className="projects__tech-item">
                                <MdCheck className="projects__tech-check" />
                                <span>Separación de la interfaz en componentes independientes (Hero, secciones, layout).</span>
                            </li>
                            <li className="projects__tech-item">
                                <MdCheck className="projects__tech-check" />
                                <span>Uso de directivas básicas e interpolación para mostrar la información sin duplicar HTML.</span>
                            </li>
                            <li className="projects__tech-item">
                                <MdCheck className="projects__tech-check" />
                                <span>Aislamiento del CSS propio de Angular para mantener el diseño limpio y ordenado.</span>
                            </li>
                            <li className="projects__tech-item">
                                <MdCheck className="projects__tech-check" />
                                <span>Maquetación pensada para visualizarse correctamente en móviles y ordenadores.</span>
                            </li>
                        </ul>

                        <div className="projects__footer">
                            <div className="projects__tags">
                                <span className="projects__tag">Angular</span>
                                <span className="projects__tag">SCSS / Bootstrap</span>
                                <span className="projects__tag">TypeScript</span>
                                <span className="projects__tag">Mobile First</span>
                            </div>
                            <div className="projects__actions">
                                <a href="https://peluqueria-generica.vercel.app" target="_blank" rel="noopener noreferrer" className="projects__btn projects__btn--primary">
                                    <LuExternalLink /> Ver Demo
                                </a>
                                <a href="https://github.com/gonzalezz13/barbershopLP" target="_blank" rel="noopener noreferrer" className="projects__btn projects__btn--outline">
                                    <LuCode /> Repositorio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projects__grid">
                    <div className="projects__grid-first">
                        <img src="/preview_velas.png" alt="Preview Tienda Shopify Velas de Llum"></img>
                        <div className="projects__grid-contribution">
                            <p className="projects__grid-note">Valor aportado:</p>
                            <p className="projects__grid-result">Traslado de especificaciones comerciales reales a una plataforma autosuficiente y totalmente operativa como Shopify.</p>
                        </div>
                    </div>
                    <div className="projects__grid-second">
                        <div className="projects__grid-beginning">
                            <p className="projects__grid-role" style={{ backgroundColor: 'color-mix(in srgb, var(--color-extra) 20%, transparent)', color: 'var(--color-tertiary)' }}>COLABORACIÓN FAMILIAR / NEGOCIO REAL</p>
                            <span className="projects__grid-note">Comercio en producción</span>
                        </div>

                        <h3>Soporte y Personalización Ecommerce (Shopify)</h3>
                        <p className="projects__grid-desc">Configuración técnica y personalización de la plataforma para un comercio en producción. Ajuste de plantillas, CSS a medida y optimización de la configuración. </p>

                        <h4 className="projects__grid-quote">
                            <span style={{ color: 'var(--color-primary)' }}><FaCheckCircle /></span>
                            TAREAS TÉCNICAS REALIZADAS:
                        </h4>
                        <ul className="projects__tech-list">
                            <li className="projects__tech-item">
                                <MdCheck className="projects__tech-check" />
                                <span>Adaptación de secciones y bloques del tema base según las necesidades de la tienda.</span>
                            </li>
                            <li className="projects__tech-item">
                                <MdCheck className="projects__tech-check" />
                                <span>Modificación de hojas de estilo del tema para alinear el diseño con la identidad de marca.</span>
                            </li>
                            <li className="projects__tech-item">
                                <MdCheck className="projects__tech-check" />
                                <span>Parametrización de productos, variantes, menús de navegación y pasarelas de cobro.</span>
                            </li>
                            <li className="projects__tech-item">
                                <MdCheck className="projects__tech-check" />
                                <span>Ajuste de elementos visuales para asegurar una navegación y compra fluida desde el teléfono.</span>
                            </li>
                        </ul>

                        <div className="projects__footer">
                            <div className="projects__tags">
                                <span className="projects__tag">Shopify</span>
                                <span className="projects__tag">CSS Personalizado</span>
                                <span className="projects__tag">Gestión de Catálogo</span>
                                <span className="projects__tag">Pasarelas de Pago</span>
                            </div>
                            <div className="projects__actions">
                                <a href="https://velasdellum.com" target="_blank" rel="noopener noreferrer" className="projects__btn projects__btn--outline">
                                    <LuEye /> Ver Tienda
                                </a>
                                <button type="button" disabled className="projects__btn projects__btn--disabled" title="Repositorio privado por acuerdo comercial">
                                    <LuLock /> Repo privado
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Projects