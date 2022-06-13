import React from "react";
import Carrito from "./carrito.png";

export const ImagenCarrito = () => {
    return (
        <div className="cart-btn">
            <img src={Carrito}></img>
            <p class ="cantidad-en-carro">0</p>
        </div>
    )
}