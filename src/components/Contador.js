import React from "react";
import { useState } from "react";

export const Contador = (props) => {
    const {stock} = props;
	const [numero, setNumero] = useState(1);
    if (numero > 0 && stock >= numero){
	const Suma = () => {
		setNumero(numero + 1);
	};
    const Resta =() =>{
        setNumero(numero -1);
    };
	return (
		<div className="contador">
			<h4>{`Tenes ${numero} productos en el carrito`}</h4>
			{numero && <h5>{new Date().toLocaleString()}</h5>}
			<button onClick={(evento) => Suma()}>Sumá</button>
            <button onClick={(evento) => Resta ()}>Restá</button>
		</div>
	)
}
};

export default Contador