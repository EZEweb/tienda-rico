import React from "react"
import Item from './Item'

function ItemList ({productos}){
    return(
		productos.map(e =>
 			<Item
			 key={e.id}
			 titulo={e.titulo}
			 precio={e.precio}
			 foto={e.foto}
			/>
		)
    )
}

export default ItemList