import React from 'react'
import Carrito from './imagenes/carrito.png'
import {CartContext} from './CartContext'
import {useContext} from 'react'

export const CartWidget = () => {
    const {itemsCart} = useContext(CartContext)

    let numerito = 0
    itemsCart.map((num) =>(
        numerito = numerito + num.contador
    ))
    return (
        <div className="botoncarrito">
            {numerito
            ?<p>{numerito}</p>
            :<p style={{color:"black"}}>0</p>
            }
            <img src={Carrito} alt="foto del carrito"></img>
        </div>
    )
}