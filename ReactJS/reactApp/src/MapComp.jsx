import React from 'react'

const MapComp = () => {
    let userName=["ram","shayam","john"];
  return (
    <>
    <ul>
        {
            userName.map((name)=>(
                <li>{name}</li>
            ))
        }
    </ul>
    </>
  )
}

export default MapComp