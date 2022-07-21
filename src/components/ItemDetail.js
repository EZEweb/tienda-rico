import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CartContext } from './CartContext'
import { useContext } from 'react'
import ItemCount from './ItemCount'

function ItemDetail (item){
    
    const {titulo,foto,precio,id,inicial,stock}=item
    const [contador,setContador] = useState(0)
    const {addItem} = useContext(CartContext)
 
    const onAdd = (cantidad)=>{
        setContador(cantidad)
        addItem(item,cantidad)
    }

    return(
        <>
        <Link to="/ItemDetailContainer"><img src={foto} alt={`/ItemDetail/${id}`}/></Link>
        <div className="Textos">
            <h1>{titulo}</h1>
            <h2>${precio}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <br></br>
            {contador
            ?<Link to='/Cart'><button>Ir a mi carrito</button></Link>
            :<ItemCount inicial={inicial} stock={stock} onAdd={onAdd} addItem={addItem} />}
        </div>
        </>
    )
}

export default ItemDetail