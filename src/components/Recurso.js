import React from "react";

function Recurso ({title, img, ruta}){
    console.log(ruta)
    return(
        <article className="articulo">
            <a href={`${ruta}`} target="_blank" rel="noreferrer">
            <img src={img} alt={"foto del producto"}/>
            <h2>{title}</h2>
            </a>
        </article>
    )
}

export default Recurso