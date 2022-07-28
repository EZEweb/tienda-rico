import React from 'react'
import { Link } from "react-router-dom";

function About () {
    return (
        <div className="inicio">
            <div>
            <h1>Sobre mi</h1>
            <br></br>
                <p>
                    ¡Hola!
                    Mi nombre es Ezequiel y soy un diseñador y desarrollador Front-end de La Costa, Buenos Aires, 
                    Argentina. Me encanta dedicarme a hacer proyectos funcionales y estéticamente cuidados.
                </p>
                <Link to='/tienda-rico'>
                    <button>Volver atras</button>
                </Link> 
            </div>
        </div>
    )
}

export default About