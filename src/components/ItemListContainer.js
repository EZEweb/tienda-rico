import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from './ItemList'
import customFetch from '../recursos/customFetch'
import productos from '../recursos/productos'

function ItemListContainer () {
    let [items, setItems] = useState([])

    useEffect(() => {
        customFetch(2000, productos)
        .then (resultado => setItems(resultado))
        .catch (console.log ("Algo esta maliendo sal"))
    }, [items])
    return (
        <div className="containerPagina">
            {
                items?.length <= 1 ? <div className="loader"></div> : <ItemList productos = {items}/>
            }
        </div>
    )
}

export default ItemListContainer