import React from 'react'
import {CartContext} from './CartContext'
import {useContext} from 'react'
import ItemCart from './ItemCart'
import EmptyCart from './EmptyCart'

const Cart=()=>{
    const {clear,itemsCart,totalprice} = useContext(CartContext)//traigo x context la funcion clear y los estados itemsCart y totalprice
    const condicion = itemsCart.length===0//condicion x si el array está vacio
    console.log(itemsCart)//a ver si me mostras el array cargaditooo

    return (<>
            {condicion 
            ?<EmptyCart/>//si la condición se cumple (el carro está vacio), se despliega ese componente
            :<div className='containerPaginaDetalle'>
            {itemsCart.map(item=><ItemCart key={item.id} item={item}/>)}
            <section>
                <div>
                    <p>Precio total:{totalprice}</p>
                </div>
                <div>
                    <button onClick={clear} className='button'>Borrar Todo</button>
                </div>
            </section>
            </div>//sino zaz acá te muestro tu carrito
            }
        </>
    )
}

export default Cart