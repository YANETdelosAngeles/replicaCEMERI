import React from 'react'
import './styles/Form.css';

function Form() {
    return (
        <>
            <div class="formularioPrincipal">
                <div class="titulo">
                    <h1>Deja una respuesta</h1>
                </div>
                <div>
                    <p>
                        Tu dirección de correo electrónico no será publicada. Los campos obligatorios están marcados con *
                    </p>
                </div>
                <div>
                    <form action="">                        
                        <div class="formulario">
                            <label htmlFor="">Comentario*</label>
                            <textarea name="" id="" cols="60" rows="10"></textarea>
                        </div>
                        <div class="formulario">
                            <label htmlFor="">Nombre*</label>
                            <input class="tamanoEntrada" type="text" />
                        </div>
                        <div class="formulario">
                            <label htmlFor="">Correo Electronico*</label>
                            <input class="tamanoEntrada" type="email" />
                        </div>
                        <div class="formulario">
                            <label htmlFor="">Web*</label>
                            <input class="tamanoEntrada" type="text" />
                        </div>
                        <div class="formulario">
                            <input class="opcion" type="checkbox" />
                            <label htmlFor="">Guarda mi nombre, correo electrónico y web en este navegador para la próxima vez que comente.</label>
                        </div>
                        <div>
                            <button class="btnPublicar">Publicar el comentario</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form
