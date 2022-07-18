import React from "react"
import { useContext, useState } from "react"
import { getFirestore, addDoc, collection, updateDoc, doc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { CartContext } from "./CartContext"

const ConfirmarCompra = () => {

    let {itemsCart, clear, preciototal} = useContext(CartContext)
    let navigate = useNavigate()
    let basededatos = getFirestore()

    let [ordenid, setOrdenId] = useState ()
    let [envio, setEnvio] = useState(false)
    let [nombre, setNombre] = useState("")
    let [apellido, setApellido] = useState("")
    let [tel, setTel] = useState("")
    let [mail, setMail] = useState("")

    let enviarOrden = (nombre, apellido, tel, mail) =>{
        let date = new Date()
        let orden = {
            buyer: {nombre: nombre, apellido: apellido, tel: tel, mail: mail},
            items: [...itemsCart],
            date: date
        }
        let coleccion = collection(basededatos, "ordenes")
        
        addDoc(coleccion, orden)
        .then(({id}) => {
            setOrdenId(id);
            setTimeout(()=>{
                clear();
                navigate('/Home')
            }, 5000)
        })
        .catch((err) => console.log(err))

        itemsCart.forEach((items) => {
            let cambioStock = doc(basededatos, "productos", items.id)
            updateDoc(cambioStock, { stock: items.stock - items.cantidad })
        });
    }

    let limpiarSubmit = (e) =>{
        e.preventDefault();
        enviarOrden(nombre, apellido, tel, mail);
    }

    return (
        <div className="containerFormulario">
            <form className="formulario" onSubmit={limpiarSubmit}>
                <h3>Complete el formulario para confirmar su compra:</h3>
                <p>Nombre</p>
                <input onChange={(e) => setNombre(e.target.value)} value={nombre} name="nombre"/>
                <p>Apellido</p>
                <input onChange={(e) => setApellido(e.target.value)} value={apellido} name="apellido"/>
                <p>Teléfono</p>
                <input onChange={(e) => setTel(e.target.value)} value={tel} name="telefono"/>
                <p>Mail</p>
                <input onChange={(e) => setMail(e.target.value)} value={mail} name="mail"/>
                <p>El total es: ${preciototal}</p>
                <div>
                    <button type='submit' onClick={()=>setEnvio(true)}> Enviar</button>
                    {envio && <p>Gracias por tu compra :) Su id de compra es: {ordenid} Será redirigido a la página principal</p>}
                    {console.log({ordenid})}
                </div>
            </form>
        </div>
    )
}

export default ConfirmarCompra

// import React from "react"
// import { useContext, useState } from "react"
// import { getFirestore, addDoc, collection, updateDoc, doc } from "firebase/firestore"
// import { useNavigate } from "react-router-dom"
// import { CartContext } from "./CartContext"

// const ConfirmarCompra = () => {

//     let {itemsCart, clear, preciototal} = useContext(CartContext)
//     let navigate = useNavigate()
//     let basededatos = getFirestore()
//     let [ordenid, setOrdenId] = useState ()

//     let [envio, setEnvio] = useState(false)
//     const [comprax, setComprax] = useState({
//         nombre: "",
//         apellido: "",
//         tel: "",
//         mail: "",
//     })

//     let cargaCompra= (e) => {
//         setComprax ({...comprax, [e.target.name]:e.target.value })
//     }

//     let enviarOrden = (e) =>{
//         e.preventDefault();
//         let date = new Date()
//         let orden = {
//             buyer: comprax,
//             items: [{...itemsCart}],
//             date: date
//         }
//         let coleccion = collection(basededatos, "ordenes")
//         let ordenesListado = (coleccion)
        
//         addDoc(ordenesListado, orden)
//         .then(({id}) => {
//             setOrdenId(id);
//             setTimeout(()=>{
//                 clear();
//                 navigate('/Home')
//             }, 5000)
//         })
//         .catch((err) => console.log(err))

//         itemsCart.forEach((items) => {
//             let cambioStock = doc(basededatos, "productos", items.id)
//             updateDoc(cambioStock, { stock: items.stock - items.cantidad })
//         });

//         setComprax({nombre:"", apellido:"", mail:"", tel:""})
//     }

//     let limpiarSubmit = () =>{
//         enviarOrden();
//     }

//     return (
//         <div className="containerFormulario">
//             <form className="formulario" onSubmit={limpiarSubmit}>
//                 <h3>Complete el formulario para confirmar su compra:</h3>
//                 <p>Nombre</p>
//                 <input onChange={cargaCompra} value={comprax.nombre} name="nombre"/>
//                 <p>Apellido</p>
//                 <input onChange={cargaCompra} value={comprax.apellido} name="apellido"/>
//                 <p>Teléfono</p>
//                 <input onChange={cargaCompra} value={comprax.tel} name="telefono"/>
//                 <p>Mail</p>
//                 <input onChange={cargaCompra} value={comprax.mail} name="mail"/>
//                 <p>El total es: ${preciototal}</p>
//                 <div>
//                     <button type='submit' onClick={()=>setEnvio(true)}> Enviar</button>
//                     {envio && <p>Gracias por tu compra :) Su id de compra es: {ordenid} Será redirigido a la página principal</p>}
//                     {console.log({ordenid})}
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default ConfirmarCompra