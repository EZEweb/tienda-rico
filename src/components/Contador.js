import React, { useState } from "react";

export const Contador = (props) => {
    const {stock} = props;
	const [numero, Cantidad] = useState(1);
    if (numero > 0 && stock >= numero){
	const Suma = () => {
		Cantidad(numero + 1);
	};
    const Resta =() =>{
        Cantidad(numero -1);
    };
	return (
		<div className="containerPagina">
			<h4>{`Tenes ${numero} productos en el carrito`}</h4>
			{numero && <h5>{new Date().toLocaleString()}</h5>}
			<button onClick={(evento) => Suma()}>Sumá</button>
            <button onClick={(evento) => Resta ()}>Restá</button>
		</div>
	);
}
};

// export const Contador = (props) => {
//     const {stock} = props;
// 	const [numero, Cantidad] = useState(1);
//     if (numero > 0){
// 	const Suma = () => {
// 		Cantidad(numero + 1);
// 	};
//     const Resta =() =>{
//         Cantidad(numero -1);
//     };
// 	return (
// 		<div className="containerPagina">
// 			<h4>{`Tenes ${numero} productos en el carrito`}</h4>
// 			{numero && <h5>{new Date().toLocaleString()}</h5>}
// 			<button onClick={(evento) => Suma()}>Sumá</button>
//             <button onClick={(evento) => Resta ()}>Restá</button>
// 		</div>
// 	);
// 	}else{
// 		if (stock >= numero){
// 		const Suma = () => {
// 			Cantidad(numero + 1);
// 		};
// 		const Resta =() =>{
// 			Cantidad(numero -1);
// 		};
// 		return (
// 			<div className="containerPagina">
// 				<h4>{`Tenes ${numero} productos en el carrito`}</h4>
// 				{numero && <h5>{new Date().toLocaleString()}</h5>}
// 				<button disabled={(evento) => Suma()}>Sumá</button>
// 				<button disabled={(evento) => Resta()}>Restá</button>
// 			</div>
// 		)
// 		}
// 	}
// };