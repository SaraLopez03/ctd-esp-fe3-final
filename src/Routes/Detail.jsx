import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState({})
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    console.log(urlParams.get('id'))
    axios.get(`https://jsonplaceholder.typicode.com/users/1`).then((response) => {
      console.log(response)
      
    })
  })
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daniel</td>
            <td>jjidnscjwkc@hotmail.com</td>
            <td>857473783</td>
            <td>jjidnscjwkc@hotmail.com</td>
          </tr>
        </tbody>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail