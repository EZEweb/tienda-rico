import { React, useEffect, useState }from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore'
import {NavBar} from './NavBar';

function ItemListContainer () {
    let [items, setItems] = useState ([])
    let {categoria} = useParams()

    useEffect(() => {
        let basededatos = getFirestore();
        let itemsContainer = collection(basededatos, "productos")
        let listado = query(itemsContainer)
        let listadoPorCategoria = query(itemsContainer, where("categoria", "==", `${categoria}`))
        if(categoria){
            getDocs(listadoPorCategoria)
            .then((snapshot) =>{
                if(snapshot.size === 0){
                    console.log ("Error al  cargar");
                }
            setItems(snapshot.docs.map((doc) =>
                ({id: doc.id, ...doc.data()})))})
            .catch((err) => console.log(err))
            .finally((fin) => console.log(fin))
        }else{
            getDocs(listado)
            .then((snapshot)=>{
                if(snapshot.size===0){
                    console.log("Error al  cargar")
                }
            setItems(snapshot.docs.map((doc)=>
                ({id:doc.id,...doc.data()})))})
            .catch(err => console.log(err))
            .finally(fin => console.log(fin))
        }},[categoria]);

    return (
        <>
        <NavBar/>
        <div className="containerPagina">
            {
                items?.length <= 1 ? <div className="loader"></div> : <ItemList productos = {items}/>
            }
        </div>
        </>
    )
}

export default ItemListContainer;