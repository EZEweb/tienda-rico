import React from 'react'
import { Link } from "react-router-dom";

function Home () {
    return (
        <div className="inicio">
            <div>
            <h1>Hola <br></br>mundo_</h1>
            <a><Link to="/redes">Redes</Link></a>
            <a><Link to="/">Tienda</Link></a>
            <a>Contacto</a>
            </div>
        </div>
    )
}

export default Home