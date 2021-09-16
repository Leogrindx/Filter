import React, {useEffect, useState} from 'react'
import {
    useParams
  } from "react-router-dom";
const Response = (date) =>{
    const [res, setRes] = useState([])
    const {id} = useParams()
    useEffect(()=> {
        fetch('/lol')
        .then(response => response.json())
        .then(json => setRes(json))
    },[id])
    
    return (
        <div>
            {res.map(element => (
                <div key={element.name} className="item">
                    <h3>{element.name}</h3>
                    <h3>{element.color}</h3>
                    <h3>{element.material}</h3>
                    <h3>{element.price}</h3>
                </div>
            ))}
        </div>
    )
}

export default Response