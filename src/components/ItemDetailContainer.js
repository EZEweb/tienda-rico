import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import customFetch from '../recursos/customFetch'
import productos from '../recursos/productos'

function ItemDetailContainer () {
    let [item, setItem] = useState()

    useEffect(() => {
        customFetch(2000, productos)
        .then (res => setItem(res.find(detail => detail.id === 0)))
        .catch (console.log ("Algo esta maliendo sal"))
    },)
    return (
        <div className="containerPaginaDetalle">
            {
                item? <ItemDetail {...item}/> : <div className="loader"></div>
            }
        </div>
    )
}

export default ItemDetailContainer