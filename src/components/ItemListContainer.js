import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from './ItemList'
import customFetch from '../recursos/customFetch'
import productos from '../recursos/productos'

function ItemListContainer () {
    let [items, setItems] = useState([])

    useEffect(() => {
        customFetch(3000, productos)
        .then (resultado => setItems(resultado))
        .catch (console.log ("Algo esta maliendo sal"))
    }, [items])
    return (
        <div className="containerPagina">
            {
                items?.lenght <= 1 ? <span class="loader"></span> : <ItemList productos = {items}/>
            }
        </div>
    )
}

export default ItemListContainer