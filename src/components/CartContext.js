import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children})=>{
    const [itemsCart,setItemsCart] = useState([]);//array a mostrar//si sumo algo dentro del array, puedo ver montado el cart
    
    const isInCart = (id) => {
        const inCart = itemsCart.find(item => item.id === id)
        return inCart
    }//revisa el carro a partir de una busqueda en el array, x id

    const addItem = (item, cantidad) => {
        if(isInCart(item.id)){
            setItemsCart(itemsCart.map((venta) =>
            venta.id === item.id?{...venta, cantidad: venta.cantidad + cantidad}:venta)) //esta ya el producto cargado?//si es que si, sumate capo dale//sino, sos la nueva venta
        }else{
            setItemsCart([...itemsCart, {...item, cantidad: cantidad}])//si no está, agrega uno nuevo, a todo lo que ya hay
        }//si ya está, se guarda en el mismo array, con más cantidad, la que el contador manda
    }

    const clear = (item) => {
        setItemsCart([])  
    }//aca limpio todo el array

    const removeItem = (remove) =>{
        setItemsCart (itemsCart.filter((item)=>item.id !== remove ))
    }//aca remuevo lo seleccionado en el array //acortado

    const preciototal = itemsCart.reduce((total, item) =>  (item.precio * item.cantidad) + total, 0)

    return(
        <CartContext.Provider value={{addItem,clear,removeItem,isInCart, preciototal, itemsCart}}>
            {children}
        </CartContext.Provider>
    )//aca se lo mando a les hijes
}

export default CartContextProvider