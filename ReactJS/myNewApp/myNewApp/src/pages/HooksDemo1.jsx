import React, { useState } from 'react'

const HooksDemo1 = () => {

    // let count=0;
    // function btnClick(){
    //     console.log(count);
    //     count++;
    // }

    const [count,setCount]=useState(0);   // usestate return array

    // function btnClick() {
    //     setCount(count+1);
    // }
  return (
   <>
    <h1>Hooks 1</h1>
    <div align="center">
        Count:{count} <br />
    <button onClick={()=>setCount(count+1)} className='btn btn-outline-primary'>Increment</button><br />
    <button onClick={()=>setCount(count-1)} className='btn btn-outline-primary'>Decrement</button>
    </div>
   </>
  )
}

export default HooksDemo1