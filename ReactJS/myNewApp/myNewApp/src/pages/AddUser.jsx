import axios from 'axios';
import React, { useState,useContext } from 'react'
import { userContext } from "../context/globalContext"

const AddUser = () => {
    
    const [formData,setFormData]=useState({});
    const [msg,setMsg] =useState(null);
    const {header}=useContext(userContext);
    

    function inputHandler(e){
      // console.log(e.target);
      setFormData({...formData ,[e.target.name]:e.target.value})
      
      
      
    }

   async function formHandler(e){
        e.preventDefault();
        const res=await axios.post("http://localhost:8000/admin/adduser",formData,header);
        console.log(res);
        setMsg(res.data.msg);
    }
    
  return (
    <>
      <h1>Add User</h1>
      <div align="center">
        <form method='post' onSubmit={formHandler}>
            <table className='table table-bordered w-50 table-dark '>
                <tbody>
                    <tr>
                        <td>User Name</td> <td><input type="text"  name="unm" onInput={inputHandler}/></td>

                    </tr>
                     <tr>
                        <td>Email</td> <td><input type="text"  name="mailId" onInput={inputHandler}/></td>

                    </tr>
                    <tr>
                        <td>Password</td> <td><input type="password"  name="pwd"  onInput={inputHandler}/></td>

                    </tr>
                    <tr>
                       <td colSpan={2} style={{ textAlign: "center" }} >
                        <input type="submit" name="subBtn"  onInput={inputHandler} />
                        </td> 

                    </tr>
                </tbody>

            </table>
        </form>
        {msg && (
          <p className='alert alert-success w-50 mx-auto'>
            {msg}
          </p>
        )}

      </div>
    </>
  )
}

export default AddUser