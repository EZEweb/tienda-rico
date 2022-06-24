import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import customFetch from '../recursos/customFetch'
import productos from '../recursos/productos'

function ItemListContainer () {
    let [items, setItems] = useState([])
    const [filter, setFilter] = useState("");

    useEffect(() => {
        customFetch(2000, productos)
        .then (resultado => setItems(resultado))
        .catch (console.log ("Algo esta maliendo sal"))
    }, [items])
    
    const filterProductos = (arrayDeProductos) => {
        return filter !== ""
        ? arrayDeProductos.filter((producto) => producto.categoria === filter)
        : arrayDeProductos;
    };

    return (
        <div className="containerPagina">
                <li onClick={() => setFilter("afiches")}>afiches</li>
                <li onClick={() => setFilter("pinsZ")}>pins</li>
                <li onClick={() => setFilter("stickers")}>stickers</li>
            {   
                items?.length <= 1 ? <div className="loader"></div> : <ItemList productos = {filterProductos}/>
            }
        </div>
    )
}

export default ItemListContainer

//Esto está bien hasta ayer unu

// function ItemListContainer () {
//     let [items, setItems] = useState([])

//     useEffect(() => {
//         customFetch(2000, productos)
//         .then (resultado => setItems(resultado))
//         .catch (console.log ("Algo esta maliendo sal"))
//     }, [items])
//     return (
//         <div className="containerPagina">
//             {
//                 items?.length <= 1 ? <div className="loader"></div> : <ItemList productos = {items}/>
//             }
//         </div>
//     )
// }