import React from 'react'
import { useState } from 'react'

export const Contador = ({stock, inicial, onAdd}) => {
	
	const [numero, setNumero] = useState(inicial)
	
	const num0 = numero === 1
	const numMax = numero === stock

	const suma = () => {
		if (numero < stock){
			return setNumero(numero=>numero + 1);
		}
	}

    const resta =() =>{
		if (numero > inicial){
        	return setNumero(numero=>numero -1);
		}
    }

	// esto para luego
	const handleItemcount = (e)=>{
        e.stopPropagation()
		// var cantidad = numero;
        onAdd(false)
    }
	return (
		<>
			<div className="contador">
				<h4>{`Estás añadiendo ${numero} productos al carrito`}</h4>
				{num0
				?<button className='botonoff' onClick={()=>{suma()}}>-</button>
				:<button className='button' onClick={()=>{resta()}}>-</button>}
				{numMax
              	?<button className='botonoff' onClick={()=>{suma()}}>+</button>
              	:<button className='button' onClick={()=>{suma()}}>+</button>}
			</div>
			{num0 === 1
			? <button className='botonoff' >Agregar al carrito</button>
			: <button onClick={handleItemcount}>Agregar al carrito</button>}
		</>
	)
}

export default Contador