import React from "react";
import {Link} from "react-router-dom";

function Item ({titulo, foto, precio, id}){
    return(
        <article className="articulo">
            <Link to={`/item/${id}`}>
            <img src={foto} alt={"foto del producto"}/>
            <h2>{titulo}</h2>
            <p>${precio}</p>
            </Link>
        </article>
    )
}

export default Item

// function Item ({titulo, foto, precio, id}){
//     return(
//         <article>
//             <Link to={`/ItemDetailContainer/${id}`}>
//             <img src={foto} alt={`${id}`}/>
//             <h2>{titulo}</h2>
//             <p>${precio}</p>
//             </Link>
//         </article>
//     )
// }

// export default Item