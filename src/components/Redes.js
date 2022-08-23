import React from 'react'
import { Link } from 'react-router-dom'

function Redes () {
    return (
        <div className="inicio">
            <div>
            <h1>Redes_</h1>
                    <a href="http://www.behance.com/EZE_" target="_blank" rel="noreferrer">Behance</a>
                    <a href="https://www.linkedin.com/in/eze-web/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="http://www.instragram.com/EZE_404_" target="_blank" rel="noreferrer">Instagram</a>
                    <a href="https://ar.pinterest.com/eze_web/" target="_blank" rel="noreferrer">Pinterest</a>
                    <a href="https://twitter.com/EZE_404" target="_blank" rel="noreferrer">Twitter</a>
                    <Link to='/tienda-rico'>
                        <button>Volver atras</button>
                    </Link> 
            </div>
        </div>
    )
}

export default Redes