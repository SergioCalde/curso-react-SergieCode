import { useState } from "react";
import { UserList } from "./components/userList"

export const UsersApp = () => {

    const [endPoint, setEndPoint] = useState('users')

    const handleFetch = () => {
        setEndPoint(endPoint == 'users' ? 'comments' : 'users')
    }

  return (
    <>
        <h1>Lista de usuarios:</h1>
        <UserList endPoint={endPoint}></UserList>
        <button onClick={handleFetch}> Aquí se llama a la API </button>
    </>
  )
}
