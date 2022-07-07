import React from 'react'
import { useState } from 'react'


export const ItemCount = ({stock, inicial, onAdd,item}) => {
	const [cantidad, setCantidad] = useState(inicial)

	const suma = () => {
		if (cantidad < stock){
			return setCantidad(cantidad + 1);
		}
	}

    const resta =() =>{
		if (cantidad > inicial){
        	return setCantidad(cantidad -1);
		}
    }

	return (
		<>
			<div className="contador">
				<h4>{`Estás añadiendo ${cantidad} productos al carrito`}</h4>
				<button disabled={cantidad <= inicial} className='button' onClick={()=>{resta()}}>-</button>
				<button disabled={cantidad >= stock} className='button' onClick={()=>{suma()}}>+</button>
			</div>
			<button onClick={() => {onAdd(cantidad)}}>Agregar al carrito</button>
		</>
	)
}

export default ItemCount