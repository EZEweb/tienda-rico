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

// export const ItemList = (productos) => {
//     return(
// 		productos.map(e =>
//  				<Item
// 				key={e.id}
// 				name={e.titulo}
// 				imagen={e.foto}
// 				price={e.precio}
// 				/>
// 			)
//     )
// }