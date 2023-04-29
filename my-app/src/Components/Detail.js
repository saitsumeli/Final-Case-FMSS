import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useStarWars } from "../Context/StarWarsContext";
import { Link } from "react-router-dom";

function Detail() {
  const {list } = useStarWars();
  const { name } = useParams();
  // burada detailShip diye bir const oluşturuyoruz ve bunu params içerisinde verdiğimiz değere eşitliyoruz
  const detailShip = list.find((ship) => ship.name === name)
  return (
    <div className="detailCard">
      {detailShip ? (
        <div className="detailText" >
          <div className="detailImg"></div>
          {/* bizden istenilen detail kısımlarını burada çekiyoruz */}
          <h1>{detailShip.name}</h1>
          <p>Model: {detailShip.model}</p>  
          <p>Manufacturer: {detailShip.manufacturer}</p> 
          <p>Max atmosphering speed: {detailShip.max_atmosphering_speed}</p>  
          <p>Crew: {detailShip.crew}</p>  
          <p>Passengers: {detailShip.passengers}</p>  
          <p>Cargo capacity: {detailShip.cargo_capacity}</p> 
          <p>Hyperdrive rating: {detailShip.hyperdrive_rating}</p>  
          <button className="backBtn"><Link to={`/`}>Back</Link></button>
        </div>
      ) : (
        <h1>Starship not found</h1>
      )} 
      
    </div>
  )
}

export default Detail;
