/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import React from 'react'

export const UserList = ({ endPoint }) => {

    const url = `http://jsonplaceholder.typicode.com/${endPoint}`;

    const [data, setData] = useState([]);

    const fetchUsers = async() => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data)
        }catch(error){
            console.log(error);
        }
    }

    useEffect( () => {
        fetchUsers();
    }, [endPoint]);

  return (
    <>
        <ul>
            {endPoint == 'users' ? data.map( item => <li key={item.id}>{ item.name }</li>)  
                                :  data.map( item => <li key={item.id}>{ item.body }</li>)  
            }
            
        </ul>
    </>
  )
}
