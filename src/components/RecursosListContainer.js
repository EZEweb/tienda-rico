import { React, useEffect, useState }from 'react'
import RecursoList from './RecursoList'
import { useParams } from 'react-router-dom'
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore'

function RecursosListContainer () {
    let [recursos, setRecursos] = useState ([])
    let {category} = useParams()

    useEffect(() => {
        let basededatos = getFirestore();
        let recursosContainer = collection(basededatos, "recursos")
        let listado = query(recursosContainer)
        let listadoPorCategory = query(recursosContainer, where("category", "==", `${category}`))
        if(category){
            getDocs(listadoPorCategory)
            .then((snapshot) =>{
                if(snapshot.size === 0){
                    console.log ("Error al  cargar");
                }
            setRecursos(snapshot.docs.map((doc) =>
                ({id: doc.id, ...doc.data()})))})
            .catch((err) => console.log(err))
            .finally((fin) => console.log(fin))
        }else{
            getDocs(listado)
            .then((snapshot)=>{
                if(snapshot.size===0){
                    console.log("Error al  cargar")
                }
            setRecursos(snapshot.docs.map((doc)=>
                ({id:doc.id,...doc.data()})))})
            .catch(err => console.log(err))
            .finally(fin => console.log(fin))
        }},[category]);

    return (
        <>
        <div className="containerPagina">
            {
                recursos?.length <= 1 ? <div className="loader"></div> : <RecursoList recursos = {recursos}/>
            }
        </div>
        </>
    )
}

export default RecursosListContainer;