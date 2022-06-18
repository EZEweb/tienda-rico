import React from "react";
import Carrito from "./imagenes/carrito.png";

export const ImagenCarrito = () => {
    return (
        <div className="cart-btn">
            <img src={Carrito} alt="foto del carrito"></img>
            <p class ="cantidad-en-carro">0</p>
        </div>
    )
}