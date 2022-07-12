import { React, useEffect, useState }from 'react'
import ItemList from './ItemList'
// import customFetch from '../recursos/customFetch'
// import productos from '../recursos/productos'
import { useParams } from 'react-router-dom'
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore'

function ItemListContainer () {
    let [items, setItems] = useState([])
    let {categoria} = useParams()

    useEffect(() => {
        let basededatos = getFirestore();
        let itemsCollection = collection(basededatos, "productos")
        if(items.length === 0){
            getDocs(itemsCollection)
            .then((snapshot)=>{
                setItems(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))})
            .catch (console.log ("Error al cargar"))
            .finally(<div className="loader"></div>)
        }else {
            let q = query(itemsCollection,where('categoria','==',`${categoria}`));
            getDocs(q)
            .then((snapshot)=>{
                if(snapshot.length===0){console.log()}
                setItems(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))})
            .catch (console.log ("Error al cargar"))
            .finally(<div className="loader"></div>)
        }},[items]);

    return (
        <div className="containerPagina">
            {
                items?.length <= 1 ? <div className="loader"></div> : <ItemList productos = {items}/>
            }
        </div>
    )
}

export default ItemListContainer;