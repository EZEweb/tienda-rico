import { React, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getFirestore, getDoc, doc } from "firebase/firestore";
import {NavBar} from './NavBar';

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
        .catch((err) => console.log(err))
        .finally((fin) => console.log(fin))
    },[id])
    return (
        <>
        <NavBar/>
        <div className="containerPaginaDetalle">
            {
                item? <ItemDetail {...item}/> : <div className="loader"></div>
            }
        </div>
        </>
    )
}

export default ItemDetailContainer;