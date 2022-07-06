import { useState,useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    const [itemsCart,setItemsCart] = useState([]);//array a mostrar//si sumo algo dentro del array, puedo ver montado el cart
    const [cartCantidad,setCartCantidad] = useState(0)//estado de la cantidad
    const [totalprecio,setTotalprecio] = useState(0)//estado del precio total

    useEffect (() => {
        var cant = 0;
        var precio = 0;
        itemsCart.forEach(element => {
            cant = cant+element.ammount
        });
        itemsCart.forEach(element =>{
            precio = precio +(element.precio)*(element.ammount)
        })
        setCartCantidad(cant)//se cambia la cantidad
        setTotalprecio(precio)//se cambia el precio
    }, [itemsCart])//effect para actualizar cantidad y precio x item

    function checkitems(){
        return console.log(itemsCart)
    }

    function addItem(item,ammount){
        ammount.item = ammount;
        var newItemsCart = [...itemsCart,item]
        setItemsCart(newItemsCart)
    }   //aca añado al array determinado item

    function addItemRepeated(item,ammount){
        var itemtoedit = itemsCart.find(itemarr=>itemarr.id===item.id)
        var prevammount = item.ammount;
        itemtoedit.ammount = ammount+prevammount
        var arrayfiltrado = itemsCart.filter((itemarr)=>itemarr.id !== item.id )
        setItemsCart([...arrayfiltrado,itemtoedit])
    }//añado item repetido

    function clear () {
        setItemsCart([])  
    }//aca limpio todo el array

    function removeItem (itemid) {
        var arraynuevo = itemsCart.filter((item)=>item.id !== itemid )
        setItemsCart(arraynuevo)
    }//aca remuevo lo seleccionado en el array

    function isInCart (id) {
        if(itemsCart.find(item=>item.id === id)===undefined){
            return true
        }else {
            return false
        }
    }//aca reviso si está o no en el carro, mediante el id

    return(
        <CartContext.Provider value={{addItem,clear,checkitems,removeItem,isInCart,addItemRepeated,itemsCart,cartCantidad,totalprecio}}>
            {children}
        </CartContext.Provider>
    )//aca se lo mando a les hijes
}

export default CartContextProvider