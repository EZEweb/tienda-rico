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
    console.log (contador);
 
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

    //estimo que acá está el error // la función onAdd usa los valores cantidad y ammount que los traigo local y x context
    //la funcion onAdd sigue actualizando el estado de contador
    //después, en el if, reviso si el producto que añado ya está. si no, lo suma x addItem. Si si, lo añade pero x addItemrepeated

    // const onAdd = (cantidad,ammount)=>{
    //     setContador((cantidad))
    //     return console.log(contador)
    // }//esto estaba bien :')