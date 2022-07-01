import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import customFetch from '../recursos/customFetch'
import productos from '../recursos/productos'
import { useParams } from 'react-router-dom'

function ItemListContainer () {
    let [items, setItems] = useState([])
    const {categoria} = useParams()

    useEffect(() => {
        customFetch(1000, productos)
        .then(resultado =>{categoria ? setItems (resultado.filter(items => items.categoria=== categoria)): setItems(resultado)})
        .catch (console.log ("Algo esta maliendo sal"))
        .finally(<div className="loader"></div>)
    }, [categoria])
    return (
        <div className="containerPagina">
            {
                items?.length <= 1 ? <div className="loader"></div> : <ItemList productos = {items}/>
            }
        </div>
    )
}

export default ItemListContainer;

//ponele que esto iba bien

// import React from 'react'
// import { useEffect, useState, useParams } from 'react'
// import ItemList from './ItemList'
// import customFetch from '../recursos/customFetch'
// import productos from '../recursos/productos'

// function ItemListContainer () {
//     let [items, setItems] = useState([])
//     const [filtro,setFilter] = useState("")
//     const {categoria} = useParams()

//     const filtroItems = arrayitems=>{
//         return arrayitems.filter(item=>item.categoria === filtro) 
//     }

//     useEffect(()=>{
//         setFilter(categoria || "")
//     },[categoria])

//     useEffect(() => {
//         customFetch(1000, productos)
//         .then (items =>{setItems(filtro !== "" ? filtroItems(arrayitems) : arrayitems)})
//         .catch (console.log ("Algo esta maliendo sal"))
//     }, [filtro])
//     return (
//         <div className="containerPagina">
//             {
//                 items?.length <= 1 ? <div className="loader"></div> : <ItemList productos = {items}/>
//             }
//         </div>
//     )
// }

// export default ItemListContainer