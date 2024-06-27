import "./general.css"

import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <div className="header-content">
                <div className="flex-grow flex">
                    Header

                </div>
                <div className="flex-end relative">

                </div>
            </div>
            <menu className="menu">
                <ul>
                    <li><Link id="home" to="/" className="link">Pagina principal</Link></li>
                </ul>
            </menu>
        </div>
    );
}