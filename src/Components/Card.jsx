import React, { useEffect } from "react";
import doctor from "../assets/doctor.jpg"
import { useNavigate } from "react-router-dom";


const Card = ({ name, username, id }) => {
  const navigate = useNavigate()

 

  const addFav = ()=>{
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const newFavorites = {
      name: name,
      username: username,
      id: id
    };
    if (favorites) {
      favorites.push(newFavorites)
      localStorage.setItem('favorites', JSON.stringify(favorites))
    } else {
      localStorage.setItem('favorites',JSON.stringify([newFavorites]))
    }
    
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  const details = () => {
    navigate(`/dentist/${id}`)
  }

  return (
    <div className="card" >
        <img src={doctor} alt="card" className="style-card"/>
        <p className="detail-pointer" onClick={details}>{name}</p>
        <p>{username}</p>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
