import React from 'react'
import {Link} from 'react-router-dom'
import Matesito from './imagenes/matesito.png'

const EmptyCart = () => {
    return <div className="containerPaginaDetalle">
        <h3>Tu carrito está vacio<br></br>¿Un matesito y elegimos?</h3>
        <Link to='/itemlistcontainer'>
            <h3>Volver a Explorar </h3>
            <img src={Matesito} alt="foto del carrito"/>
        </Link>
    </div>
}

export default EmptyCart;