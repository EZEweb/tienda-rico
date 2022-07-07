import React from "react";
import {ImagenLogo} from './Logo';
import {CartWidget} from './CartWidget';
import { Link } from "react-router-dom";

export const MiNav = () => {
    return (
        <div className="MiNav">
            <Link to="/"><ImagenLogo/></Link>
            <ul>
                <li><Link to='/categoria/afiches'>afiches</Link></li>
                <li><Link to='/categoria/pines'>pines</Link></li>
                <li><Link to='/categoria/stickers'>stickers</Link></li>
                <li id="carro">  
                    <Link to="/cart"><CartWidget/></Link>
                </li>
            </ul>
        </div>
    )
}