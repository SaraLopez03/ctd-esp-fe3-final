import React, { useEffect } from "react";
import doctor from "../assets/doctor.jpg"
import { useNavigate } from "react-router-dom";


const Card = ({ name, username, id }) => {
  const navigate = useNavigate()

 

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  const details = () => {
    navigate(`/dentist/${id}`)
  }

  return (
    <div className="card" >
        <img src={doctor} alt="card" className="style-card"/>
        <p onClick={details}>{name}</p>
        <p>{username}</p>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
