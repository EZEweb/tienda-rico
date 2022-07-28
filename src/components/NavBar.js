import React from "react";
import {CartWidget} from './CartWidget';
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/itemlistcontainer"><h1>Tienda_</h1></Link>
            <div className="responsive">
                <ul> 
                    <li><Link to='/categoria/afiches'>afiches</Link></li>
                    <li><Link to='/categoria/pines'>pines</Link></li>
                    <li><Link to='/categoria/stickers'>stickers</Link></li>
                    <li id="carro">  
                        <Link to="/cart"><CartWidget/></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}