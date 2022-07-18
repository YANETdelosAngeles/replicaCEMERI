import React from 'react'
import './styles/Footer.css'

function Footer() {
    return (
        <>
            <div className='container'>
                <div className='secciones'>
                    <div className='section1'>
                        <h2>CEMERI</h2>
                        <p>
                            Comprometidos con la verdad y el desafío que ella conlleva. 
                            Nuestra meta es develar al mundo  para una mejor toma de decisiones. 
                        </p>
                    </div>
                    <div className='section2'>
                        <i className="ri-facebook-fill"></i>
                        <i className="ri-youtube-fill"></i>
                        <i className="ri-instagram-line"></i>
                        <i className="ri-twitter-fill"></i>
                    </div>
                </div>

                <blockquote>
                    <hr></hr>
                </blockquote>
                <div className='section3'>
                    <span>Todos los derechos reservados © CEMERI 2019 -2021</span>
                    <span id='contact'>Contacto</span>
                    <span id='polity'>Política de privacidad</span>
                </div>    


            </div>
        </>
    )
}

export default Footer
