import axios from 'axios';
import React from 'react'
import { useParams} from 'react-router-dom'
import { useEffect,useState,useContext } from 'react';
import { userContext } from "../context/globalContext"

const EditRecord = () => {
    const [userData, setUserData] = useState({});
    const [formData, setFormData] = useState({});
    const [msg, setMsg] = useState(null);

     const {header}=useContext(userContext);

    const params=useParams();
    const fetchDataById=async()=>{
        const res=await axios.get(`http://localhost:8000/admin/editUser/${params.uid}`,header);
        // console.log(res.data);
        setUserData(res.data.userData);
        console.log(userData);
    }

    useEffect(()=>{
        fetchDataById();
    },[]);


    const inputHandler=(e)=>{
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });

    }
 

    const formHandler= async(e)=>{
        e.preventDefault();
        const res=await axios.patch(`http://localhost:8000/admin/editUser/${params.uid}`,formData)
        console.log(res);
        
        setMsg(res.data.msg);
       
        // navigate('/dash/viewUsers');
    }
  return (
    <>
    <h1>Edit Users</h1>
     <form method='post' onSubmit={formHandler} className='w-50 mx-auto'>
            <table className='table table-bordered w-50 table-dark '>
                <tbody>
                    <tr>
                        <td>User Name</td> <td><input type="text"  name="unm" value={userData.userName} onInput={inputHandler}/></td>

                    </tr>
                     <tr>
                        <td>Email</td> <td><input type="text"  name="mailId" defaultValue={userData.emailId} onInput={inputHandler} /></td>

                    </tr>
                    <tr>
                        <td>Password</td> <td><input type="password"  name="pwd" defaultValue={userData.password}  onInput={inputHandler}/></td>

                    </tr>
                    <tr>
                       <td colSpan={2} style={{ textAlign: "center" }} >
                        <input type="submit" name="updBtn" value='Update' className='btn btn-info' />
                        </td> 

                    </tr>
                </tbody>

            </table>
            {msg && <div className='alert alert-success'>{msg}</div>}
            
        </form>
    
    </>
    

    
  )
}

export default EditRecord