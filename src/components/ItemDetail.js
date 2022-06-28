import React from "react";
import { Link } from "react-router-dom";


function ItemDetail ({titulo, foto, precio, id}){
    return(
        <>
        <Link to="/ItemDetailContainer"><img src={foto} alt={`/ItemDetail/${id}`}/></Link>
        <div className="Textos">
            <h1>{titulo}</h1>
            <h2>${precio}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Comprar</button>
        </div>
        
        </>
    )
}

export default ItemDetail

{/* <Link to={`/ItemDetail/${id}`}><img src={foto} alt={`/ItemDetail/${id}`}/></Link> */}