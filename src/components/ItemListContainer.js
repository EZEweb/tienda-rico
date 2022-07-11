import { React, useEffect, useState }from 'react'
import ItemList from './ItemList'
// import customFetch from '../recursos/customFetch'
// import productos from '../recursos/productos'
import { useParams } from 'react-router-dom'
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore'

function ItemListContainer () {
    let [items, setItems] = useState([])
    let [filtro,setFiltro] = useState("")
    let {categoria} = useParams()
    useEffect(()=>{
        setFiltro(categoria || "")
    },[categoria])

    useEffect(() => {
        let basededatos = getFirestore();
        let itemsCollection = collection(basededatos, "productos")
        if(filtro === ""){
            getDocs(itemsCollection)
            .then((snapshot)=>{
                setItems(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))})
            .catch (console.log ("Error al cargar"))
            .finally(<div className="loader"></div>)
        }else {
            let q = query(itemsCollection,where('categoria','==',filtro));
            getDocs(q)
            .then((snapshot)=>{
                if(snapshot.length===0){console.log()}
                setItems(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))})
            .catch (console.log ("Error al cargar"))
            .finally(<div className="loader"></div>)
        }},[filtro]);

    return (
        <div className="containerPagina">
            {
                items?.length <= 1 ? <div className="loader"></div> : <ItemList productos = {items}/>
            }
        </div>
    )
}

export default ItemListContainer;