import React from 'react'
import './styles/Navbar.css'

function Navbar() {

    return (
        <>
            <div id='presentacion'>
                <div id='d1'>
                    <a href="#Login"><i class="ri-user-3-line"></i>Login</a>
                    <a href="#Busqueda"><i class="ri-search-line"></i>Busqueda</a>
                </div>
                <div id='d2'>
                    CEMERI
                </div>
                <div id='d3'>
                    <a href="#Registrarse"><i class="ri-mail-line"></i>Registrarse</a>
                </div>
            </div>
            
            <div id='menu'>
                <nav>
                    <ul class="menu-horizontal">
                        <li>
                            <a class="titulos" href="#Articulos">Artículos
                                <span><i class="ri-arrow-down-s-line"></i></span>
                            </a>
                            <ul class="menu-vertical">
                                <li>
                                    <a href="/">De análisis</a>
                                </li>
                                <li>
                                    <a href="/">De opinión</a>
                                </li>
                                <li>
                                    <a href="/">Digest Digital</a>
                                </li>
                                <li>
                                    <a href="/">Reseña</a>
                                </li>
                            </ul>
                        </li>


                        <li>
                            <a class="titulos" href="#Contenido">Contenido
                                <span><i class="ri-arrow-down-s-line"></i></span>
                            </a>
                            <ul class="menu-vertical">
                                <li>
                                    <a href="/">Mapas</a>
                                </li>
                                <li>
                                    <a href="/">Enciclopedia</a>
                                </li>
                                <li>
                                    <a href="/">Regiones
                                        <span><i class="ri-arrow-right-s-line"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">Temas
                                        <span><i class="ri-arrow-right-s-line espacio-icon"></i></span>
                                    </a>
                                </li>
                            </ul>
                        </li>


                        <li>
                            <a class="titulos" href="#CEMERI">CEMERI
                            <span><i class="ri-arrow-down-s-line"></i></span>
                            </a>
                            <ul class="menu-vertical">
                                <li>
                                    <a href="/">Acerca</a>
                                </li>
                                <li>
                                    <a href="/">Buscador Académico</a>
                                </li>
                            </ul>
                        </li>


                        <li>
                            <a class="titulos" href="#Contacto">Contacto
                                <span><i class="ri-arrow-down-s-line"></i></span>
                            </a>
                            <ul class="menu-vertical">
                                <li>
                                    <a href="/">Convocatoria</a>
                                </li>
                                <li>
                                    <a href="/">Reseñas Sociales
                                        <span><i class="ri-arrow-right-s-line"></i></span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar