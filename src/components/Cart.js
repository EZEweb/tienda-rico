import React from 'react'
import {CartContext} from './CartContext'
import {useContext} from 'react'
import ItemCart from './ItemCart'
import EmptyCart from './EmptyCart'

const Cart=()=>{
    const {clear,itemsCart,removeItem} = useContext(CartContext)//traigo x context la funcion clear y los estados itemsCart y totalprice
    const preciototal = itemsCart.reduce((agregar, item) =>  (item.price * item.cantidad) + agregar, 0) //
    console.log(itemsCart)//a ver si me mostras el array cargaditooo

    return (<>
            {itemsCart.length===0//condicion x si el array está vacio
            ?<EmptyCart/>//si la condición se cumple (el carro está vacio), se despliega ese componente
            :<div className='containerPaginaDetalle'>
            {itemsCart.map(item=><ItemCart key={item.id} item={item}/>)}
            <section>
                <div>
                    <p>Precio total:{preciototal}</p>
                </div>
                <div>
                    <button onClick={removeItem} className='button'>Borrar Item</button>
                    <button onClick={clear} className='button'>Borrar Todo</button>
                </div>
            </section>
            </div>//sino zaz acá te muestro tu carrito
            }
        </>
    )
}

export default Cart