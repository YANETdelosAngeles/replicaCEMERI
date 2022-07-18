import React from 'react'
import './styles/Form.css';

function Form() {
    return (
        <>
            <div className="formularioPrincipal">
                <div className="titulo">
                    <h1>Deja una respuesta</h1>
                </div>
                <div>
                    <p>
                        Tu dirección de correo electrónico no será publicada. Los campos obligatorios están marcados con *
                    </p>
                </div>
                <div>
                    <form action="">                        
                        <div className="formulario">
                            <label htmlFor="">Comentario*</label>
                            <textarea name="" id="" cols="60" rows="10"></textarea>
                        </div>
                        <div className="formulario">
                            <label htmlFor="">Nombre*</label>
                            <input className="tamanoEntrada" type="text" />
                        </div>
                        <div className="formulario">
                            <label htmlFor="">Correo Electronico*</label>
                            <input className="tamanoEntrada" type="email" />
                        </div>
                        <div className="formulario">
                            <label htmlFor="">Web*</label>
                            <input className="tamanoEntrada" type="text" />
                        </div>
                        <div className="formulario">
                            <input className="opcion" type="checkbox" />
                            <label htmlFor="">Guarda mi nombre, correo electrónico y web en este navegador para la próxima vez que comente.</label>
                        </div>
                        <div>
                            <button className="btnPublicar">Publicar el comentario</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form
