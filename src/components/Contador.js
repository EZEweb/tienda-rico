import React from 'react'
import { useState } from 'react'

export const Contador = ({stock, inicial}) => {
	//agregar onAdd a las props para luego
	const [numero, setNumero] = useState(inicial)
	
	// const num0 = numero === 0
	// const numMax = numero === stock

	const suma = () => {
		if (numero < stock){
			return setNumero(numero + 1);
		}
	}

    const resta =() =>{
		if (numero > inicial){
        	return setNumero(numero -1);
		}
    }

	// esto para luego
	// const handleItemcount = (e)=>{
    //     e.stopPropagation()
    //     var cantidad = numero;
    //     onAdd(false,cantidad)
    // }
	return (
		<>
			<div className="contador">
				{/* {numero && <h5>{new Date().toLocaleString()}</h5>} */}
				{/* <button onClick={(evento) => suma()}>Sumá</button> */}
				{/* <button onClick={(evento) => resta ()}>Restá</button> */}
				<h4>{`Tenes ${numero} productos en el carrito`}</h4>
				<button onClick={()=>{suma()}}>Sumá</button>
				<button onClick={()=>{resta()}}>Restá</button>
			</div>
		{/* {numMax 
			? <button >Agregar al carrito</button>
			: <button onClick={handleItemcount}>Agregar al carrito</button>} */} 
		</>
	)
}

// {num0 
// ? <button disabled className='disabled' onClick={()=>{decrease()}}>-</button>
// : <button className='button' onClick={()=>{decrease()}}>-</button>}
// <h5>{number}</h5>
// {numMax
// ? <button disabled className='disabled' onClick={()=>{increase()}}>+</button>
// : <button className='button' onClick={()=>{increase()}}>+</button>}

export default Contador