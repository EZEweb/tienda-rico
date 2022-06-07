import React from "react";

export const MiPrimerComponente = () => {
    return (
        <div>
        <img src={'iso.gif'} style={{padding:0}}></img>
        <ul style={{display: 'flex', background:'black', paddingLeft:'50%'}}>
            <li style={{padding:'2em'}}><a href="identidad.html" >trabajos_</a></li>
            <li style={{padding:'2em'}}><a href="carrito.html">merch_</a></li>
            <li style={{padding:'2em'}}><a href="yo.html">contacto_</a></li>
        </ul>
        </div>
    )
}