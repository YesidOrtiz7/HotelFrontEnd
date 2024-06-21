import React from "react";
import {Link} from "react-router-dom";

export default function MainContent(){
    return(
        <div>
            <Link id="clients" to="/clientes">Clientes</Link>
        </div>
    );
}