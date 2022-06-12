import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import CardsEventos from "./CardEventos";
import "./Eventos.css"



function Eventos(){
return(
    <div className="container">
    <Sidebar/>
    <div className="TituloEventos">
    <h1>Eventos</h1>
    </div>
    <div className="row">
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
        <CardsEventos/>
    </div>
    </div>
)
}

export default Eventos