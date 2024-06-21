import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="">
            <div className="flex">
                <div className="flex-grow flex">
                    Header
                    <Link id="home" to="/">Pagina principal</Link>
                </div>
                <div className="flex-end relative">
                    
                </div>
            </div>
        </div>
    );
}