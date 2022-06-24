import React from "react";
import {ImagenLogo} from './Logo';
import {ImagenCarrito} from './CartWidget';
import { Link } from "react-router-dom";

export const MiNav = () => {
    return (
        <div className="MiNav">
            <Link to="/"><ImagenLogo/></Link>
            <ul>
                <li>trabajos_</li>
                <li><Link to="/ItemListContainer">merch_</Link></li>
                <li>contacto_</li>
                <li id="carro">  
                    <ImagenCarrito/>
                </li>
            </ul>
        </div>
    )
}