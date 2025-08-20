import React from 'react'





//Compelete Object cannot be rendered 
const Comp4 = () => {
    let name='Sachin'
    let age=23
    let hobbies=['Singing','Dancing','Reading']
    let obj={
        unm:'Virat'
    }
  return (
    <>
      
      <p>
         Welcome {name} <br />
         My Age is {age}
         <br />
         {hobbies[0]}
         <br />
         {obj.unm}
      </p>
    
    </>
  )
}

export default Comp4