import React from "react";
import { Link } from "react-router-dom";
import CardsHome from "../CardsHome/CardsHome";
import Slides from "../Slides/Slides";


function Home(){
return(
    <>
    <Slides/>
    <div className="container mt-5">
    <CardsHome/> 
    </div>
    </>
)
}

export default Home