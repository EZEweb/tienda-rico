import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
// import customFetch from '../recursos/customFetch'
// import productos from '../recursos/productos'
import { useParams } from 'react-router-dom'
import { doc, getDoc,getFirestore } from "firebase/firestore";
function ItemDetailContainer () {
    let [item, setItem] = useState()
    const {id} = useParams ([])

    useEffect(() => {
        const basededatos = getFirestore();
        const detailMostrado = doc(basededatos, "productos", id)
        getDoc(detailMostrado).then((snapshot)=>{
            if(snapshot.exists()){
                setItem({id: snapshot.id, ...snapshot.data()})
            }
        })
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