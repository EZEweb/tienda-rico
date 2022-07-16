import React from "react";
import LinkedIn from './imagenes/linkedin.png'
import Instagram from './imagenes/instagram.png'
import Behance from './imagenes/behance.png'

export const MiFooter = () => {
    return (
        <div className="footer">
            <div className="bajadita">
                <p>Derechos de EZE_Diseñado por EZE_¡Soy responsive!</p>
            </div>
            <div className="redes">
                <li>¡Encontrame por acá!:</li>
                <ul>
                    <a href="https://www.linkedin.com/in/eze-web/" target="_blank" rel="noreferrer"><li><img src={LinkedIn} alt="icono de LinkedIn"></img></li></a>
                    <a href="https://www.instragram.com/EZE_404_" target="_blank" rel="noreferrer"><li><img src={Instagram} alt="icono de Instagram"></img></li></a>
                    <a href="http://www.behance.com/EZE_" target="_blank" rel="noreferrer"><li><img src={Behance} alt="icono de Behance"></img></li></a>
                </ul>
            </div>
        </div>
    )
}