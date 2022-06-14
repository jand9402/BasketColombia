import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"
import { useSelector, useDispatch } from "react-redux";
import { locationFilter, categoryFilter, genderFilter } from "../../redux/actions";
import { Events } from "../../redux/actions";

function Sidebar(){
    const dispatch = useDispatch();
    const allEvents = useSelector((state) => state.all_events);
    let cities = []
    allEvents.map(e => {
      if(!cities.includes(e.city)){
        cities.push(e.city)
      }
    })
    let categories = []
    allEvents.map(e => {
      if(!categories.includes(e.category)){
        categories.push(e.category)
      }
    })
    let gender = []
    allEvents.map(e => {
      if(!gender.includes(e.gender)){
        gender.push(e.gender)
      }
    })

    function handleLocation(e, event){
      console.log(e.target.value)
      dispatch(locationFilter(event))
    }

    function handlecategory(e, event){
      console.log(event)
      dispatch(categoryFilter(event))
    }

    function handleGender(e, event){
      console.log(event)
      dispatch(genderFilter(event))
    }

    function handletodos(e){
      console.log(e.target.value)
      dispatch(Events(e.target.value))
    }

    

    return(
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent2">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button value="all" onClick={(e) => handletodos(e)} className="btn">Todos los eventos</button>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-eventos dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ubicación
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a value='all' onClick={(e) => handletodos(e)} class="dropdown-item">Todas las ubicaciones</a></li>
            <li><hr class="dropdown-divider"/></li>
            {cities.map((event) => {
          return (
            <li><a value={event} onClick={(e) => handleLocation(e, event)} class="dropdown-item">{event}</a></li>
          );
        })}
        </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-eventos dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categoría
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" value='all' onClick={(e) => handletodos(e)}>Todas las categorias</a></li>
            <li><hr class="dropdown-divider"/></li>
            {categories.map((event) => {
          return (
            <li><a value={event} onClick={(e) => handlecategory(e, event)} class="dropdown-item">{event}</a></li>
          );
        })}
        </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-eventos dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rama
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" onClick={(e) => handletodos(e)}>Todas las ramas</a></li>
            <li><hr class="dropdown-divider"/></li>
            {gender.map((event) => {
          return (
            <li><a value={event} onClick={(e) => handleGender(e, event)} class="dropdown-item" >{event}</a></li>
          );
        })}
        </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Sidebar