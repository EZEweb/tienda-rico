import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Contador from './Contador'


function ItemDetail ({titulo,foto,precio,id,inicial,stock}){
    
    const [contador,setContador] = useState(true)

    const onAdd = (valor)=>{
        return setContador(valor)
    }

    return(
        <>
        <Link to="/ItemDetailContainer"><img src={foto} alt={`/ItemDetail/${id}`}/></Link>
        <div className="Textos">
            <h1>{titulo}</h1>
            {/* {console.log({titulo})} */}
            <h2>${precio}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <br></br>
            {contador
            ?<Contador inicial={inicial} stock={stock} onAdd={onAdd} />
            :<Link to='/Home'><button>Finalizar mi compra</button></Link>}
        </div>
        </>
    )
}

export default ItemDetail