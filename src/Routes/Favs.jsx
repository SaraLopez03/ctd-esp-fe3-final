import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favorites, setFavorites] = useState([])
  useEffect(() => {
    const value = localStorage.getItem('favorites')
    setFavorites(JSON.parse(value))
  })

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {
          favorites && favorites.map((item) => {
            return <Card name={item.name} username={item.username} id={item.id}/>
          })
        }
      </div>
    </>
  );
};

export default Favs;
