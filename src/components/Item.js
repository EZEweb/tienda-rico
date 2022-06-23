import React from "react";
import {Link} from "react-router-dom";

function Item ({titulo, foto, precio}){
    return(
        <article>
            <Link to="/ItemDetailContainer">
            <img src={foto} alt="foto del producto" href="identidad.html"/>
            <h2>{titulo}</h2>
            <p>${precio}</p>
            </Link>
        </article>
    )
}

export default Item