import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ItemCount from './ItemCount'


function ItemDetail ({titulo,foto,precio,id,inicial,stock,cantidad}){
    
    const [contador,setContador] = useState(0)
    console.log (contador);

    const onAdd = (cantidad)=>{
        setContador((cantidad))
        return console.log(contador)
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
            ?<Link to='/Home'><button>Finalizar mi compra</button></Link>
            :<ItemCount inicial={inicial} stock={stock} onAdd={onAdd} />}
        </div>
        </>
    )
}

export default ItemDetail



// function ItemDetail ({titulo,foto,precio,id,inicial,stock}){
    
//     const [contador,setContador] = useState()
//     console.log (contador);

//     const onAdd = (contador)=>{
//         return setContador = () => contador=true
        
//     }

//     return(
//         <>
//         <Link to="/ItemDetailContainer"><img src={foto} alt={`/ItemDetail/${id}`}/></Link>
//         <div className="Textos">
//             <h1>{titulo}</h1>
//             {/* {console.log({titulo})} */}
//             <h2>${precio}</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//             <br></br>
//             {contador
//             ?<Contador inicial={inicial} stock={stock} onAdd={onAdd} />
//             :<button onClick={onAdd}>Finalizar mi compra</button>}
//         </div>
//         </>
//     )
// }