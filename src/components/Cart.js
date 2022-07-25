import React from 'react'
import {CartContext} from './CartContext'
import {useContext} from 'react'
import EmptyCart from './EmptyCart'
import Matesito from './imagenes/matesito.png'
import { Link } from 'react-router-dom'

const Cart=()=>{
    const {clear,itemsCart, precioTotal, removeItem} = useContext(CartContext)
    
    return (
        <>
            {itemsCart.length===0
                ?<EmptyCart/>
                :<div className='containerPagina'>
                {itemsCart.map((venta) => (
                        <div key={venta.id}>
                            <img src={venta.foto} alt={`/ItemDetail/${venta.id}`}/>
                            <h1><br></br>{venta.titulo}</h1>
                            <br></br>
                            <h4>
                                Tienes {venta.cantidad} productos en tu carrito
                            </h4>
                            <button onClick={() => removeItem(venta.id)}>Borrar unidad</button>
                        </div>
                    ))
                }
                <div>
                <h3>
                    Valor total ${precioTotal}
                </h3>
                <button onClick={clear} className='button'>Borrar Todo</button>
                </div>
                <Link to='/Home'>
                    <img src={Matesito} alt="foto del inicio"/>
                    <button className='button'>Volver al inicio</button>
                </Link>
                <Link to='/ConfirmarCompra'>
                    <button className='button'>Confirmar compra</button>
                </Link>
                </div>
            }
        </>
    )
}

export default Cart