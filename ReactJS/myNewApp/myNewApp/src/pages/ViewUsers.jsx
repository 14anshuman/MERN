import {  useEffect, useState,useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { userContext } from "../context/globalContext" // import context

const ViewUsers = () => {
  // const[count,setCount]=useState(0);
  // const[count2,setCount2]=useState(100);

  const {header}=useContext(userContext);
  const [userData, setUserData] = useState([]);
  //   useEffect(()=>{
  //     console.log("Hi from useEffect...");
  // },[count2])

  async function fetchAllData() {
    const res = await axios.get("http://localhost:8000/admin/showUsers",header);
    setUserData(res.data);
  }
  useEffect(() => {
    fetchAllData();
  }, []);

  const deleteUser = async (id) => {
   if(confirm("Are you sure you want to delete this user?")) {
      const res = await axios.post(`http://localhost:8000/admin/deleteUser/${id}`);
      alert(res.data.msg);
      fetchAllData();
    }
    
  }
  return (
    <>
      <h1>View Users</h1>
      {/* <div align="center">
        Count:{count} <br />
        Count2:{count2} <br />
    <button onClick={()=>setCount(count+1)} className='btn btn-outline-primary'>Increment</button><br />
    <button onClick={()=>setCount2(count2+1)} className='btn btn-outline-primary'>Increment 2</button><br /> */}

      {userData.length > 0 && (
        <table className="table table-bordered table-striped w-75 mx-auto">
          <thead className="table-dark">
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>Password</th>
              <th>Role</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user._id}>
                <td>{user.userName}</td>
                <td>{user.emailId}</td>
                <td>{user.password}</td>
                <td>{user.hasRole}</td>
                <td>{user.isActive ? "Active" : "Inactive"}</td>
                <td>
                  <Link to={`/dash/edit/${user._id}`}>Edit</Link>
                </td>
                <td>
                  <button onClick={()=>deleteUser(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ViewUsers;
