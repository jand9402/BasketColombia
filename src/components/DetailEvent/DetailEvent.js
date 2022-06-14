import React from "react";
import { getDetail } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./DetailEvent.css";

export default function DetailEvent(){

    let {id} = useParams()
    console.log(id)

    const allEvents = useSelector((state) => state.all_events2);
    let current = null

    allEvents.map(evento => {
        if(evento.id == id){
            current = evento
        }
    })
    // const [detail, setDetail] = useState({})

    // const getDet = async () => {
    //     const data = await axios.get(`${id}`)
    //     setDetail(data.data)
    //     console.log(data.data)
    // }
    // useEffect( () => {
    //     getDet()
    // },[])

    return(
        <div className="container">
            <Link to="/Eventos">
            <button className="btn-primary mt-5">Regresar</button>
            </Link>
<div id="carouselExampleSlidesOnly" class="carousel slide mb-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={current.img} class="d-block w-100 mt-5" alt="..."/>
    </div>
  </div>
</div>
<div className="mb-6">
<ul class="list-group mb-5 mt-5">
  <li class="list-group-item">Organizador: {current.name}</li>
  <li class="list-group-item">Ciudad: {current.City}</li>
  <li class="list-group-item">Fecha de inicio: {current.start_date}</li>
  <li class="list-group-item">Fecha de Fin: {current.end_date}</li>
  <li class="list-group-item">Categoria: {current.category}</li>
  <li class="list-group-item">Rama: {current.gender}</li>
  <li class="list-group-item">Contacto: {current.contact_email}</li>
  <li class="list-group-item">Valor Inscripción: {current.inscription_fee}</li>
  <li class="list-group-item">Equipos confirmados: {current.confirmed_teams.map(team => team + ' - ' )}</li>
  <li class="list-group-item">Premiación: {current.awards? current.awards : "Trofeo y medallas"}</li>
  <li class="list-group-item">Descripción: {current.description}</li>
</ul>
</div>
</div>
    )
}


