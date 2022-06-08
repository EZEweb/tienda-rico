import React from "react";
import Logo from "./iso.gif"


export const MiNav = () => {
    return (
        <div>
        <img src={Logo}></img>
        <ul>
            <li><a href="identidad.html" >trabajos_</a></li>
            <li><a href="carrito.html">merch_</a></li>
            <li><a href="yo.html">contacto_</a></li>
        </ul>
        </div>
    )
}