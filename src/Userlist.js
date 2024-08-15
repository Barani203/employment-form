import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";




function Userlist() {
// looping Data using usestate
const [users, setUsers] = useState([])



const onDelete = async (id) => {
  await axios.delete(`https://61974899af46280017e7e4ed.mockapi.io/users/`+id)

.then(res => {
  // console.log(res.data)
  fetchData(res);
  
 
})
.catch(error => console.log(error))
}


async function fetchData() {
  try {
  const items = await fetch("https://61974899af46280017e7e4ed.mockapi.io/users");
      let userData = await items.json()
    setUsers(userData)
    // alert("Data saved")

 } catch (error) {
     console.log(error)
     
 }
}

useEffect(() => {
   
    fetchData()
}, [])


  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Userlist</h1>
        <Link
          to={'/usercreate'}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>

      <div>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </tfoot>
                <tbody>
                  {
                     users.map((user,index)=>{
                        return<tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.position}</td>
                        <td>{user.office}</td>
                        <td>{user.age}</td>
                        <td>{user.startDate}</td>
                        <td>{user.salary}</td>
                        <th>
                       <Link to={`/User-edit/${user.id}`}>   <button className="btn btn-primary btn-sm mt-2" >Edit</button></Link>
                          
                         <button onClick={()=>onDelete(user.id)} className="btn btn-danger btn-sm ml-1 mt-2">Delete</button>
    
                        </th>
                      </tr>

                     })
                  }
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userlist;
