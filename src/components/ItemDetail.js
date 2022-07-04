import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Contador from './Contador'


function ItemDetail ({titulo,foto,precio,id,inicial,stock}){
    
    const [contador,setContador] = useState(0)
    console.log (contador);

    const onAdd = (contador)=>{
        return setContador(contador+1)
    }
    // const onAdd = ()=>{
    //     if (contador===0){
    //     return setContador(contador=>contador +1);
    // }
    // }
//     const ButtonComponent = ({ stock, changeStock }) => {
//   return <button onClick={() => changeStock(stock + 1)}>Agregar 1</button>;
// };

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
            :<Contador inicial={inicial} stock={stock} onAdd={onAdd} />}
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