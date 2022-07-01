import React from 'react'
import { Link } from 'react-router-dom'
import Contador from './Contador'


function ItemDetail ({titulo, foto, precio, id, inicial, stock}){
    // const onAdd = (valor,ammount)=>{
       
    //     setItemcount(valor)
    //     // console.log(ammount,item)
    //     addItem(item,ammount)
    // }
    return(
        <>
        <Link to="/ItemDetailContainer"><img src={foto} alt={`/ItemDetail/${id}`}/></Link>
        <div className="Textos">
            <h1>{titulo}</h1>
            <h2>${precio}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <br></br>
            <Contador inicial={inicial} stock={stock}/>
            <Link to='/Home'><button>Comprar</button></Link>
        </div>
        </>
    )
}

export default ItemDetail