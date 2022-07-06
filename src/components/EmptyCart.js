import React from 'react'
import {Link} from 'react-router-dom'
import Carrito from './imagenes/carrito.png'

const EmptyCart = () => {
    return <div className="containerPaginaDetalle">
        <h2>Aún no tienes nada en tu carrito! Vuelve y hazme millonario</h2>
        <Link to='/'>
            <h3>Volver a Explorar </h3>
            <img src={Carrito} alt="foto del carrito"/>
        </Link>
    </div>
}// esto es solo para cuando el carrito está vacio

export default EmptyCart;