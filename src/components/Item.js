import React from "react";

function Item ({titulo, foto, precio}){
    return(
        <article>
            <h2>{titulo}</h2>
            <img src={foto} alt="foto del producto"/>
            <p>${precio}</p>
        </article>
    )
}

export default Item