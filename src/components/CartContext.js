import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children})=>{
    const [itemsCart,setItemsCart] = useState([]);//array a mostrar//si sumo algo dentro del array, puedo ver montado el cart
    
    const isInCart = (id) => {
        const inCart = itemsCart.find(item => item.id === id)
        return inCart
      }//aca reviso si está o no en el carro, mediante el id

    function addItem(item,cantidad){
        item.cantidad = cantidad;
        const newItemsCart = [...itemsCart,item]
        setItemsCart(newItemsCart)
    }   //aca añado al array determinado item

    function clear () {
        setItemsCart([])  
    }//aca limpio todo el array

    function removeItem (itemid) {
        setItemsCart (itemsCart.filter((item)=>item.id !== itemid ))
    }//aca remuevo lo seleccionado en el array //acortado

    return(
        <CartContext.Provider value={{addItem,clear,removeItem,isInCart,itemsCart}}>
            {children}
        </CartContext.Provider>
    )//aca se lo mando a les hijes
}

export default CartContextProvider

        
    // function isInCart (id) {
    //     if(itemsCart.find(item=>item.id === id)===undefined){
    //         return true
    //     }else {
    //         return false
    //     }
    // }
    // const [cartCantidad,setCartCantidad] = useState(0)//estado de la cantidad
    // const [totalprecio,setTotalprecio] = useState(0)//estado del precio total

    // useEffect (() => {
    //     const cant = 0;
    //     const precio = 0;
    //     itemsCart.forEach(element => {
    //         cant = cant+element.ammount
    //     });
    //     itemsCart.forEach(element =>{
    //         precio = precio +(element.precio)*(element.ammount)
    //     })
    //     setCartCantidad(cant)//se cambia la cantidad
    //     setTotalprecio(precio)//se cambia el precio
    // }, [itemsCart])//effect para actualizar cantidad y precio x item

    // function checkitems(){
    //     return console.log(itemsCart)
    // }

        // function addItemRepeated(item,ammount){
    //     const itemtoedit = itemsCart.find(itemarr=>itemarr.id===item.id)
    //     const prevammount = item.ammount;
    //     itemtoedit.ammount = ammount+prevammount
    //     const arrayfiltrado = itemsCart.filter((itemarr)=>itemarr.id !== item.id )
    //     setItemsCart([...arrayfiltrado,itemtoedit])
    // }//añado item repetido