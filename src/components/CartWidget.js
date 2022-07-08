import React from 'react'
import Carrito from './imagenes/carrito.png'
import {CartContext} from './CartContext'
import {useContext} from 'react'

export const CartWidget = () => {
    const {itemsCart} = useContext(CartContext)

    let numerito = 0
    itemsCart.map((num) =>(
        numerito = numerito + num.cantidad
    ))
    return (
        <div className="botoncarrito">
            {numerito}
            <img src={Carrito} alt="foto del carrito"></img>
        </div>
    )
}