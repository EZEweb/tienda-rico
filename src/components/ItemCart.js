import React from 'react'
import {CartContext} from './CartContext'
import {useContext} from 'react'

const ItemCart = ({id,foto,cantidad,precio,titulo})=>{
const {removeItem} = useContext(CartContext)//traigo la función que borra items x context

function handleRemove(){
    removeItem(id)//borro manualmente un item x id
}

    return (<>
        <section>
        <div>
            <img src={foto} alt="foto del producto" />
        </div>
        <div>
            <h4>{titulo}</h4>
            <h4>Precio por Unidad: {precio}</h4>
            <input type="number" defaultValue={cantidad} />
        </div>
        <div>
            <button className='button' onClick={handleRemove}>Borrar item</button>
        </div>
        </section>
    </>//muestro el producto, el precio total y un boton para borrar
    )
}

export default ItemCart;