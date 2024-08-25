/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { useFetchData } from './hooks/useFetchData'

export const UserList = ({ endPoint }) => {

   const { data, isLoading } = useFetchData( endPoint )

  return (
    <>
        <ul>
            {isLoading 
            ? <p>Cargando...</p> 
            : endPoint == 'users' 
                ? data.map( item => <li key={item.id}>{ item.name }</li>)  
                :  data.map( item => <li key={item.id}>{ item.body }</li>)  
            }
            
        </ul>
    </>
  )
}
