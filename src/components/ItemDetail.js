import React from "react"

function ItemDetail ({titulo, foto, precio}){
    return(
        <>
        <img src={foto} alt="Foto del producto en detalle"/>
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