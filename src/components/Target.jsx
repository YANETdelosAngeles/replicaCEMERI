import React from 'react'
import './styles/Target.css';

function Target() {
    return (
        <>
            <div className="contenedor">
                <div className="card">
                    <img src="https://cemeri.org/wp-content/uploads/Somalia-6-1.jpg" className="imagenCard" alt='imagen de card'></img>
                    <div className="contenido">
                        <h3>¿Que son los estados fallidos?</h3> 
                        <p>La perdida del monopolio de la violencia legítima dentro del territorio es la característica principal de<br/> los ‘Estados Fallidos’.</p>
                    </div>
                    <div className="base">
                        <p>Red CEMERI</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Target