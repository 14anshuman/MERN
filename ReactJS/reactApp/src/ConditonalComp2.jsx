

const CompA = () => {
  return (
    <>
       <h1 className='alert alert-success'>User is A</h1>
    </>
  )
}


const CompB = () => {
  return (
    <>
      <h1 className='alert alert-warning'>User is B</h1>
    </>
  )
}




const Comp8=()=>{
    let name=""


    return(
        <>
       {/* {name && <h1>Welcome {name}</h1>} */}
       {name? <CompA/>:<CompB/>}
        </>
    )
}

export default  Comp8
