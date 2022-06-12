import React from "react";
import { Link } from "react-router-dom";
import './CardsHome.css'


function CardsHome(){
return(
    <>
    <div class="card cardHome">
 
  <div class="card-body">
    <Link to="/Eventos" className="Links LinkCardsHome">
    <h1 class="card-title">Eventos</h1>
    </Link>
  </div>

</div>
<div class="card cardHome mt-5">
 
  <div class="card-body">
  <Link to="/Equipos" className="Links LinkCardsHome">
    <h1 class="card-title">Equipos</h1>
    </Link>
  </div>
  
</div>
</>
)
}

export default CardsHome