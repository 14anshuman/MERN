import React from 'react'

const Comp10 = () => {
    
    let count=0;
    function btnClick(){
     
    }
    function btnClick2(name){
       alert("hi.."+name)
    }
  return (
    <>
    Count:{count}  <br />
    <button className='btn btn-danger' onClick={btnClick}>Increment</button> <br />
     <button className='btn btn-danger mt-4' onClick={()=>btnClick2("Sachin")}>Button2</button>
    </>

  )
}

export default Comp10