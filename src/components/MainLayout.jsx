import React from "react";
import "./general.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import "../index.scss";
// import "remixicon/fonts/remixicon.css"


import Header from "./Header";
import ClientMainPage from "./clientes/paginaPrincipal/ClientMainPage";
import NewClient from "./clientes/registro/NewClient";
import GetClient from "./clientes/obtenerCliente/GetClient";
import UpdateClient from "./clientes/actualizarCliente/UpdateClient";
import MainContent from "./MainContent";
import RoomMainPage from "./habitaciones/paginaPrincipal/RoomMainPage";
import NewRoom from "./habitaciones/nuevaHabitacion/NewRoom";
import RoomTypeMainPage from "./habitaciones/tipoHabitacion/RoomTypeMainPage";
import NewRoomType from "./habitaciones/tipoHabitacion/NewRoomType";
import UpdateRoomType from "./habitaciones/tipoHabitacion/UpdateRoomType";
import RoomStatusMainPage from "./habitaciones/estadosHabitacion/RoomStatusMainPage";
import NewRoomStatus from "./habitaciones/estadosHabitacion/NewRoomStatus";
import UpdateRoomStatus from "./habitaciones/estadosHabitacion/UpdateRoomStatus";
import UpdateRoom from "./habitaciones/actualizarHabitacion/UpdateRoom";
import ChangeRoomStatus from "./habitaciones/estadosHabitacion/ChangeRoomStatus";


export default function MainLayout() {
    return (
        <Router>
            <div className="">

                <Header />
                <div className="mainLayout-content">
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/clientes" element={<ClientMainPage />} />
                        <Route path="/registro" element={<NewClient />} />
                        <Route path="/buscar" element={<GetClient />} />
                        <Route path="/cliente/:id" element={<UpdateClient/>} />

                        
                        <Route path="/habitaciones" element={<RoomMainPage />} />
                        <Route path="/nuevahabitacion" element={<NewRoom />} />

                        <Route path="/tipohabitaciones" element={<RoomTypeMainPage />} />
                        <Route path="/nuevotipo" element={<NewRoomType />} />
                        <Route path="/tipohabitacion/:id" element={<UpdateRoomType/>} />

                        <Route path="/estadoshabitaciones" element={<RoomStatusMainPage />} />
                        <Route path="/nuevoestado" element={<NewRoomStatus />} />
                        <Route path="/estadohabitacion/:id" element={<UpdateRoomStatus/>} />
                        <Route path="/actualizarhabitacion/:roomId" element={<UpdateRoom/>} />
                        <Route path="/cambiarEstado/:roomId" element={<ChangeRoomStatus/>} />
                    </Routes>
                </div>

                {/* <Footer /> */}
            </div>
        </Router>


    );

}
