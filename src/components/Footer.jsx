import React from 'react'
import './styles/Footer.css'

function Footer() {
    return (
        <>
            <div class='container'>
                <div class='secciones'>
                    <div class='section1'>
                        <h2>CEMERI</h2>
                        <p>
                            Comprometidos con la verdad y el desafío que ella conlleva. 
                            Nuestra meta es develar al mundo  para una mejor toma de decisiones. 
                        </p>
                    </div>
                    <div class='section2'>
                        <i class="ri-facebook-fill"></i>
                        <i class="ri-youtube-fill"></i>
                        <i class="ri-instagram-line"></i>
                        <i class="ri-twitter-fill"></i>
                    </div>
                </div>

                <blockquote>
                    <hr></hr>
                </blockquote>
                <div class='section3'>
                    <span>Todos los derechos reservados © CEMERI 2019 -2021</span>
                    <span id='contact'>Contacto</span>
                    <span id='polity'>Política de privacidad</span>
                </div>    


            </div>
        </>
    )
}

export default Footer
