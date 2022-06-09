import React from "react";
import Logo from "./iso.gif";
import Carrito from "./carrito.png";

export const MiNav = () => {
    return (
        <div>
        <MyNav/>
        </div>
    )
}

const MyNav = () => {
    return (
        <div className="MiNavegador">
            <img src={Logo}></img>
            <ul>
                <li><a href="identidad.html" >trabajos_</a></li>
                <li><a href="carrito.html">merch_</a></li>
                <li><a href="yo.html">contacto_</a></li>
                <li id="carro">  
                    <a class="cart-btn">
                        <img src={Carrito}></img>
                        <p class ="cantidad-en-carro">0</p>
                    </a>
                </li>
                </ul>
        </div>
    )
}