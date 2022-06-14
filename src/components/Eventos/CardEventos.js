import React from "react";
import { Link } from "react-router-dom";
import './Eventos.css'



function CardsEventos({id, city, category, gender, inscription_fee, img}){

return(
    <>
    <div class="col colEvent card cardEvento">
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Ciudad: {city}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item list-group-item-evento">Categoria: {category}</li>
    <li class="list-group-item list-group-item-evento">Rama: {gender}</li>
    <li class="list-group-item list-group-item-evento">Inscripción: {inscription_fee}</li>
  </ul>
  <div class="card-body">
    <Link to={"/detail/" + id}>
    <button className="btn-primary">más información</button>
    </Link>
  </div>
</div>
</>
)
}

export default CardsEventos