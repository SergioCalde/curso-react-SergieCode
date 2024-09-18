import { useState } from 'react'
import { UserContext } from './UserContext'

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {

  const [usuario, setUsuario] = useState({})

  return (
    <UserContext.Provider value={ { usuario, setUsuario } }>
        { children }
    </UserContext.Provider>
  )
}
