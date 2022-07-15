import React from "react"
import { useContext, useState } from "react"
import { getFirestore, addDoc, collection } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { CartContext } from "./CartContext"

const ConfirmarCompra = () => {

    let {itemsCart, clear, preciototal} = useContext(CartContext)
    let navigate = useNavigate()
    let basededatos = getFirestore()

    let [envio, setEnvio] = useState(false)
    let [nombre, setNombre] = useState("")
    let [apellido, setApellido] = useState("")
    let [tel, setTel] = useState("")
    let [mail, setMail] = useState("")

    let enviarOrden = (nombre, apellido, tel, mail) =>{
        let date = new Date()
        let orden = {
            buyer: {nombre: nombre, apellido: apellido, tel: tel, mail: mail},
            items: [{...itemsCart}],
            date: date
        }
        let coleccion = collection(basededatos, "ordenes")
        let ordenesListado = (coleccion)
        addDoc(ordenesListado, orden)
        .then(() => {
            setTimeout(()=>{
                clear();
                navigate('/Home')
            }, 2000)
        })
        .catch((err) => console.log(err))
    }

    let handleSubmit = (e) =>{
        e.preventDefault();
        enviarOrden(nombre, apellido, tel, mail);
    }

    return (
        <div className="containerFormulario">
            <form className="formulario" onSubmit={handleSubmit}>
                <h3>Complete el formulario para confirmar su compra:</h3>
                <p>Nombre</p>
                <input onChange={(e) => setNombre(e.target.value)} value={nombre} type="text" id="nombre" name="nombre"/>
                <p>Apellido</p>
                <input onChange={(e) => setApellido(e.target.value)} value={apellido} type="text" id="apellido" name="apellido"/>
                <p>Teléfono</p>
                <input onChange={(e) => setTel(e.target.value)} value={tel} type="tel" id="telefono" name="telefono"/>
                <p>Mail</p>
                <input onChange={(e) => setMail(e.target.value)} value={mail} type="mail" id="telefono" name="mail"/>
                <p>El total es: ${preciototal}</p>
                <div>
                    <button type='submit' onClick={()=>setEnvio(true)}> Enviar</button>
                    {envio && <p>Gracias por tu compra :)</p>}
                </div>
            </form>
        </div>
    )
}

export default ConfirmarCompra