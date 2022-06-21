import React from "react";

function Item ({titulo, foto, precio}){
    return(
        <article>
            <img src={foto} alt="foto del producto" href="identidad.html"/>
            <h2>{titulo}</h2>
            <p>${precio}</p>
        </article>
    )
}

export default Item