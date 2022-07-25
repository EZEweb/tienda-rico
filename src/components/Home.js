import React from 'react'
import { Link } from "react-router-dom";

function Home () {
    return (
        <div className="inicio">
            <div>
            <h1>Hola <br></br>mundo_</h1>
            <Link to="/redes">Redes</Link>
            <Link to="/itemlistcontainer">Tienda</Link>
            <Link to="/">Contacto</Link>
            </div>
        </div>
    )
}

export default Home