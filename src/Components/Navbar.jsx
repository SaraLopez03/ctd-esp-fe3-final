import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const context = useContext(ContextGlobal)
  const {state, dispatch} = context

  const theme = () => {
    if (state.theme == 'dark') {
      dispatch({
        type: 'LIGHT_THEME'
      })
    } else {
      dispatch({
        type: 'DARK_THEME'
      })
    }
  }
  
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
        <NavLink className="nav" to="/home"> Home </NavLink>
        <NavLink to="/contact"> Contact </NavLink>
        <NavLink to="/favs"> Favs</NavLink>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={theme}>Change theme</button>
    </nav>
  )
}

export default Navbar