import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import "../index.scss";
// import "remixicon/fonts/remixicon.css"


import Header from "./Header";
import ClientMainPage from "./clientes/paginaPrincipal/ClientMainPage";
import NewClient from "./clientes/registro/NewClient";
import GetClient from "./clientes/obtenerCliente/GetClient";
import UpdateClient from "./clientes/actualizarCliente/UpdateClient";
import MainContent from "./MainContent";

// import PDPContent from "pdp/PDPContent";
// import HomeContent from "home/HomeContent";
// import CartContent from "cart/CartContent";


export default function MainLayout() {
    return (
        // <Router>
        //     <div className="text-3xl mx-auto max-w-6xl">

        //         <Header />
        //         <div className="my-10">

        //             <Routes>
        //                 {/* <Route exact path="/" element={<HomeContent />} />

        //                 <Route path="/product/:id" element={<PDPContent />} />

        //                 <Route path="/cart" element={<CartContent />} /> */}

        //             </Routes>
        //         </div>

        //         {/* <Footer /> */}
        //     </div>
        // </Router>
        <Router>
            <div className="text-3xl mx-auto max-w-6xl">

                <Header />
                <div className="my-10">
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/clientes" element={<ClientMainPage />} />
                        <Route path="/registro" element={<NewClient />} />
                        <Route path="/buscar" element={<GetClient />} />
                        <Route path="/cliente/:id" element={<UpdateClient/>} />
                    </Routes>
                </div>

                {/* <Footer /> */}
            </div>
        </Router>


    );

}
