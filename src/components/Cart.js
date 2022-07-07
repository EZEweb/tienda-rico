import React from 'react'
import {CartContext} from './CartContext'
import {useContext} from 'react'
import EmptyCart from './EmptyCart'
import Matesito from './imagenes/matesito.png'
import { Link } from 'react-router-dom'

const Cart=()=>{
    const {clear,itemsCart,removeItem} = useContext(CartContext)//traigo x context la funcion clear y los estados itemsCart y totalprice
    // const precioporitem = itemsCart.reduce((item) => (item.precio * item.contador) * item.contador)
    const preciototal = itemsCart.reduce((total, item) =>  (item.precio * item.cantidad) + total, 0)
    
    return (
        <>
            {console.log(itemsCart)}
            {itemsCart.length===0//condicion x si el array está vacio
                ?<EmptyCart/>//si la condición se cumple (el carro está vacio), se despliega ese componente
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
                    Valor total ${preciototal}
                </h3>
                <button onClick={clear} className='button'>Borrar Todo</button>
                </div>
                <Link to='/Home'>
                    <img src={Matesito} alt="foto del inicio"/>
                    <button className='button'>Volver al inicio</button>
                </Link>
                </div>
            }
        </>
    )
}

export default Cart