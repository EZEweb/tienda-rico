import React, { useState } from "react";

export const Contador = () => {
    const stock = 5;
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