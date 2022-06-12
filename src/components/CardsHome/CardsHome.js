import React from "react";
import { Link } from "react-router-dom";
import './CardsHome.css'


function CardsHome(){
return(
    <>
    <div class="card cardHome">
 
  <div class="card-body">
    <h1 class="card-title">Eventos</h1>
  </div>

</div>
<div class="card cardHome mt-5">
 
  <div class="card-body">
    <h1 class="card-title">Equipos</h1>
  </div>
  
</div>
</>
)
}

export default CardsHome