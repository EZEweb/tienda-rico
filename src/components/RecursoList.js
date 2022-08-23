import React from "react"
import Recurso from './Recurso'

function RecursoList ({recursos}){
    return(
		recursos.map(e =>
 			<Recurso
			 key={e.id}
			 id={e.id}
			 title={e.title}
			 img={e.img}
			/>
		)
    )
}

export default RecursoList