import React from "react";
import {ImagenLogo} from './Logo';
import {ImagenCarrito} from './CartWidget';
import { Link } from "react-router-dom";

export const MiNav = () => {
    return (
        <div className="MiNavegador">
            <Link to="/"><ImagenLogo/></Link>
            <ul>
                <li><a>trabajos_</a></li>
                <li><Link to="/ItemListContainer"><a>merch_</a></Link></li>
                <li><a>contacto_</a></li>
                <li id="carro">  
                    <ImagenCarrito/>
                </li>
                </ul>
        </div>
    )
}