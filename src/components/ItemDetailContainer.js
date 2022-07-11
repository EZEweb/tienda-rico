import { React, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
// import customFetch from '../recursos/customFetch'
// import productos from '../recursos/productos'
import { useParams } from 'react-router-dom'
import { getFirestore, getDoc, doc } from "firebase/firestore";

function ItemDetailContainer () {
    let [item, setItem] = useState()
    const {id} = useParams ([])

    useEffect(() => {
        const basededatos = getFirestore();
        const detalleMostrado = doc(basededatos, "productos", id)
        getDoc(detalleMostrado).then((snapshot)=>{
            if(snapshot.exists()){
                setItem({id: snapshot.id, ...snapshot.data()})
            }
        })
        .catch (console.log ("Error al cargar"))
        .finally(<div className="loader"></div>)
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