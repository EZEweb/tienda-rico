import React from "react";

export const ItemListContainer = props => {
    const {producto} = props;
    return (
        <div className="containerPagina">
            <h2>Acá vendería {producto}</h2>
        </div>
    )
}