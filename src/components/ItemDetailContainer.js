import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import customFetch from '../recursos/customFetch'
import productos from '../recursos/productos'
import { useParams } from 'react-router-dom'

function ItemDetailContainer () {
    let [item, setItem] = useState()
    const {id} = useParams ()

    useEffect(() => {
        customFetch(1000, productos)
        .then (res => setItem(res.find(detail => detail.id === parseFloat(id))))
        // .then (res => setItem(id)))
        .catch (console.log ("Algo esta maliendo sal"))
        .finally()
    },[id])
    return (
        <div className="containerPaginaDetalle">
            {
                item? <ItemDetail {...item}/> : <div className="loader"></div>
            }
        </div>
    )
}

export default ItemDetailContainer;

// .then (res => setItem(res.find(detail => detail.id === `${id}`)))