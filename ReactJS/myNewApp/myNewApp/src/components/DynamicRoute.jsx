import React from 'react'
import { useParams } from 'react-router-dom'

const DynamicRoute = () => {
    const name=useParams();
    console.log(name.nm);
    
  return (
    <>
     
     <h1>Dynamic Route Demo Component</h1>
     
    </>
  )
}

export default DynamicRoute