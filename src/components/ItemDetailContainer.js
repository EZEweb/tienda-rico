import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from './ItemDetail'
import customFetch from '../recursos/customFetch'
import productos from '../recursos/productos'

function ItemDetailContainer () {
    let [items, setItems] = useState([])

    useEffect(() => {
        customFetch(3000, productos)
        .then (resultado => setItems(resultado))
        .catch (console.log ("Algo esta maliendo sal"))
    }, [items])
    return (
        <div className="containerPaginaDetalle">
            {
                items?.length <= 0 ? <div className="loader"></div> : <ItemDetail productos = {items}/>
            }
        </div>
    )
}

export default ItemDetailContainer