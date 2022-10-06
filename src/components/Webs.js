import React from 'react'
import { Link } from 'react-router-dom'
import { ImgRedes } from './ImgRedes';

function Webs () {
    return (
        <div className="inicio">
            <div>
                <ImgRedes/>
                <a href="https://www.abuelayetta.com.ar" target="_blank" rel="noreferrer">Abuela Yetta</a>
                <a href="https://www.galerialocal.com.ar" target="_blank" rel="noreferrer">GALO</a>
                <a href="http://www.akimera.com.ar/" target="_blank" rel="noreferrer">Akimera</a>
                <Link to='/tienda-rico'>
                    <button>Volver atras</button>
                </Link> 
            </div>
        </div>
    )
}

export default Webs