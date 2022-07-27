import React from 'react'
import {CartContext} from './CartContext'
import {useContext} from 'react'
import EmptyCart from './EmptyCart'
import Matesito from './imagenes/matesito.png'
import { Link } from 'react-router-dom'
import {NavBar} from './NavBar';

const Cart=()=>{
    const {clear,itemsCart, precioTotal, removeItem} = useContext(CartContext)
    
    return (
        <>
            <NavBar/>
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
                <button onClick={clear}>Borrar Todo</button>
                </div>
                <Link to='/itemlistcontainer'>
                    <img src={Matesito} alt="foto del inicio"/>
                    <button>Volver a la tienda</button>
                </Link>
                <Link to='/ConfirmarCompra'>
                    <button>Confirmar compra</button>
                </Link>
                </div>
            }
        </>
    )
}

export default Cart