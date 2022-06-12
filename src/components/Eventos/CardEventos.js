import React from "react";
import { Link } from "react-router-dom";
import './Eventos.css'


function CardsEventos(){
return(
    <>
    <div class="col colEvent card cardEvento">
  <img src="https://previews.123rf.com/images/enterline/enterline1403/enterline140300035/26430843-una-ilustraci%C3%B3n-vectorial-de-un-concepto-de-torneo-de-baloncesto-.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Ciudad:</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item list-group-item-evento">Categoria: U10</li>
    <li class="list-group-item list-group-item-evento">Rama: Femenino</li>
    <li class="list-group-item list-group-item-evento">Inscripción: 500.000</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</>
)
}

export default CardsEventos