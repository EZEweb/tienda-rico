import React from "react";
import {ImagenLogo} from './Logo';
import {ImagenCarrito} from './CartWidget';

export const MiNav = () => {
    return (
        <div className="MiNavegador">
            <ImagenLogo/>
            <ul>
                <li><a href="identidad.html" >trabajos_</a></li>
                <li><a href="carrito.html">merch_</a></li>
                <li><a href="yo.html">contacto_</a></li>
                <li id="carro">  
                    <ImagenCarrito/>
                </li>
                </ul>
        </div>
    )
}