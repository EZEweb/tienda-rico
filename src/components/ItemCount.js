import React from 'react'
import { useState } from 'react'

export const ItemCount = ({stock, inicial, onAdd}) => {
	
	const [cantidad, setCantidad] = useState(inicial)

	const suma = () => {
		if (cantidad < stock){
			return setCantidad(cantidad=>cantidad + 1);
		}
	}

    const resta =() =>{
		if (cantidad > inicial){
        	return setCantidad(cantidad=>cantidad -1);
		}
    }

	return (
		<>
			<div className="contador">
				<h4>{`Estás añadiendo ${cantidad} productos al carrito`}</h4>
				{cantidad
				?<button className='button' onClick={()=>{resta()}}>-</button>
				:<button disabled={cantidad <= inicial} onClick={()=>{resta()}}>-</button>}
				{cantidad 
              	?<button disabled={cantidad >= stock} onClick={()=>{suma()}}>+</button>
              	:<button className='button' onClick={()=>{suma()}}>+</button>}
			</div>
			<button onClick={() => {onAdd(cantidad)}}>Agregar al carrito</button>
		</>
	)
}

export default ItemCount


	// esto para luego
	// const handleItemcount = (e)=>{
    //     e.stopPropagation()
    //     onAdd()
    // }