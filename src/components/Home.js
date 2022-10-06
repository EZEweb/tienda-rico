import React from 'react'
import { Link } from "react-router-dom";
import { ImagenLogo } from './Logo';

function Home () {
    return (
        <div className="inicio">
            <div>
                <Link to="/tienda-rico"><ImagenLogo/></Link>
                <Link to="/redes">Redes</Link>
                {/* <Link to="/itemlistcontainer">Tienda</Link> */}
                <Link to="/about">Sobre mi</Link>
                <Link to="/webs">Desarrollos web</Link>
                <a href="https://www.matecito.co/EZE_" target="_blank" rel="noreferrer">Donaciones</a>
                {/* <Link to="/recursos">Recursos</Link> */}
            </div>
        </div>
    )
}

export default Home