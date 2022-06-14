import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import CardsEventos from "./CardEventos";
import { useSelector, useDispatch } from "react-redux";
import "./Eventos.css"



function Eventos(){
    const dispatch = useDispatch();
    const allEvents = useSelector((state) => state.all_events);

return(
    <div className="container">
    <Sidebar/>
    <div className="TituloEventos">
    <h1>Eventos</h1>
    </div>
    <div className="row">
        {allEvents.map((e) => {
          return (
              <CardsEventos key={e.id} img={e.img} id={e.id} city={e.city} category={e.category} gender={e.gender} inscription_fee={e.inscription_fee} />
          );
        })}
    </div>
    </div>
)
}

export default Eventos