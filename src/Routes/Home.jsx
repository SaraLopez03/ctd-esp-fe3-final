import React, { useContext, useEffect } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { ContextGlobal, ContextProvider } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const context = useContext(ContextGlobal)
  const {state,dispatch} = context
  const {data} = state
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      dispatch({
        type: 'UPDATE_DATA',
        payload: response.data
      })
    })
  })
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {
          data.map((item) => {
            return <Card name={item.name} username={item.username} id={item.id}/>
          })
        }
      </div>
    </main>
  )
}

export default Home