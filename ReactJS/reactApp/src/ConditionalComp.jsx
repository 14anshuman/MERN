import React from 'react'

const ValidUser = () => {
  return (
    <>
       <h1 className='alert alert-success'>User is Valid</h1>
    </>
  )
}


const InValidUser = () => {
  return (
    <>
      <h1 className='alert alert-warning'>User is Invalid</h1>
    </>
  )
}


const Comp7=()=>{
    let isValid=false;
    if(isValid){
        return <ValidUser/>
    }else{
        return <InValidUser/>
    }
}

export default  Comp7
