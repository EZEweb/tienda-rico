import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children})=>{
    const [itemsCart,setItemsCart] = useState([]);
    
    const isInCart = (id) => {
        const inCart = itemsCart.find(item => item.id === id)
        return inCart
    }

    const addItem = (item, cantidad) => {
        if(isInCart(item.id)){
            setItemsCart(itemsCart.map((venta) =>
            venta.id === item.id?{...venta, cantidad: venta.cantidad + cantidad}:venta))
        }else{
            setItemsCart([...itemsCart, {...item, cantidad: cantidad}])
        }
    }

    const clear = (item) => {
        setItemsCart([])  
    }

    const removeItem = (remove) =>{
        setItemsCart (itemsCart.filter((item)=>item.id !== remove ))
    }

    const precioTotal = itemsCart.reduce((total, item) =>  (item.precio * item.cantidad) + total, 0)
    
    return(
        <CartContext.Provider value={{addItem,clear,removeItem,isInCart, precioTotal, itemsCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider