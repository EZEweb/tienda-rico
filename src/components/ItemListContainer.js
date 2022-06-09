import React from "react";

export const MiItemListContainer = props => {
    const {producto} = props;
    const {listadoStock} = `Producto en venta ${producto}`;
    return (
        <div>
            <MyItemListContainer venta={listadoStock}/>
        </div>
    )
}

const MyItemListContainer = (props) => {
    const {product} = props;
    return (
        <div className="containerPagina">
            <article>
                <h2>Acá vendería {product}</h2>
            </article>
        </div>
    )
}