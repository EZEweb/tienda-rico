import React from "react"
import { useContext, useState } from "react"
import { getFirestore, addDoc, collection, updateDoc, doc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { CartContext } from "./CartContext"

const ConfirmarCompra = () => {

    let {itemsCart, clear, precioTotal} = useContext(CartContext)
    let navigate = useNavigate()
    let basededatos = getFirestore()

    let [ordenId, setOrdenId] = useState ()
    let [envio, setEnvio] = useState(false)

    const [cliente, setCliente] = useState({
        nombre: "",
        apellido: "",
        tel: "",
        mail: "",
    });

    const ClienteOnChange = (e) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value });
    };

    let enviarOrden = (e) =>{
        e.preventDefault();
        let date = new Date()
        let orden = {
            buyer: cliente,
            items: [...itemsCart],
            date: date,
            preciototal: precioTotal
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
        .finally((fin) => console.log(fin))

        itemsCart.forEach((items) => {
            let cambioStock = doc(basededatos, "productos", items.id)
            updateDoc(cambioStock, { stock: items.stock - items.cantidad })
        });
    setCliente({ nombre: "", apellido:"", mail: "", tel: ""})
    }

    return (
        <div className="containerFormulario">
            <form className="formulario" onSubmit={enviarOrden}>
                <h3>Complete el formulario para confirmar su compra:</h3>
                <p>Nombre</p>
                <input onChange={ClienteOnChange} value={cliente.nombre} name="nombre"/>
                <p>Apellido</p>
                <input onChange={ClienteOnChange} value={cliente.apellido} name="apellido"/>
                <p>Teléfono</p>
                <input onChange={ClienteOnChange} value={cliente.tel} name="tel"/>
                <p>Mail</p>
                <input onChange={ClienteOnChange} value={cliente.mail} name="mail"/>
                <p>El total es: ${precioTotal}</p>
                <div>
                    <button type='submit' onClick={()=>setEnvio(true)}> Enviar</button>
                    {envio && <p>Gracias por tu compra 😀 Su id de compra es: {ordenId} <br></br>Será redirigido a la página principal</p>}
                </div>
            </form>
        </div>
    )
}

export default ConfirmarCompra