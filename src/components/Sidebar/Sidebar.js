import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"

function Sidebar(){
    return(
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent2">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button className="btn">Todos los eventos</button>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-eventos dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ubicación
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Todas las ubicaciones</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Medellín</a></li>
            <li><a class="dropdown-item" href="#">Bogotá</a></li>
            <li><a class="dropdown-item" href="#">Cali</a></li>
            <li><a class="dropdown-item" href="#">Cartagena</a></li>
        </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-eventos dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categoría
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Todas las categorias</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">U10</a></li>
            <li><a class="dropdown-item" href="#">U11</a></li>
            <li><a class="dropdown-item" href="#">U12</a></li>
            <li><a class="dropdown-item" href="#">U13</a></li>
        </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-eventos dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rama
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Todas las ramas</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Masculino</a></li>
            <li><a class="dropdown-item" href="#">Femenino</a></li>
            <li><a class="dropdown-item" href="#">Mixto</a></li>
        </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Sidebar