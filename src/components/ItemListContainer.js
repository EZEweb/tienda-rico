import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
// import customFetch from '../recursos/customFetch'
// import productos from '../recursos/productos'
// import { useParams } from 'react-router-dom'
    // const {categoria} = useParams()
import {collection,getDocs,getFirestore} from 'firebase/firestore'

function ItemListContainer () {
    let [items, setItems] = useState([])
    //ojo a partir de aqui
    useEffect(() => {
        const basededatos = getFirestore();
        const itemsCollection = collection(basededatos, "productos")
        getDocs(itemsCollection).then((snapshot)=>{
            if(snapshot.size===0){
                console.log ("está vacio esto che");
            }
                setItems(snapshot.docs.map((doc) =>({id: doc.id, ...doc.data()})));
            })
            .catch (console.log ())
            .finally(<div className="loader"></div>)
        },[]);
    //     customFetch(1000, productos)
    //     .then(resultado =>{categoria ? setItems (resultado.filter(items => items.categoria=== categoria)): setItems(resultado)})
    return (
        <div className="containerPagina">
            {
                items?.length <= 1 ? <div className="loader"></div> : <ItemList productos = {items}/>
            }
        </div>
    )
}

export default ItemListContainer;