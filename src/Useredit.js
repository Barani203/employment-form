import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

function Useredit(){
    let params =useParams()//hook
// console.log(params)

 const navigate = useNavigate();

    const  formik = useFormik({
        initialValues:{
            name:"",
            position:"",
            office:"",
            age:0,
            startDate:"",
            salary:""
        },
        onSubmit :async values =>{

            try {
                
             await fetch(`https://61974899af46280017e7e4ed.mockapi.io/users/${params.id}`,{
            method :"PUT",
            body:JSON.stringify(values),
            headers:{
                "content-type":"application/json"
            }
             })
                // alert("Data is saved")
                navigate("/user")
            } catch (error) {
                console.log(error)
            }

        }
    })

    useEffect(() => {

        async function fetchData() {
            try {
            let userdata = await fetch(`https://61974899af46280017e7e4ed.mockapi.io/users/${params.id}`);
                let user = await userdata.json()
            formik.setValues(user)
              // alert("Data saved")
     
           } catch (error) {
               console.log(error)
               
           }
        }
        
         fetchData()
     }, [])
  

    return (
      <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Edit User Details</h1>
      </div>

      <div className="container">
        <div className="row"> 
            <form onSubmit={formik.handleSubmit}>
                <div className="col-lg-6">
                    <label>Name</label>
                    <input type="text" className="formcontrol"
                    id="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}/>
                </div>
                <div className="col-lg-6">
                    <label>Position</label>
                    <input type="text" className="formcontrol"
                    id="position"
                    onChange={formik.handleChange}
                    value={formik.values.position}/>
                </div>
                <div className="col-lg-6">
                    <label>Office</label>
                    <input type="text" className="formcontrol"
                    id="office"
                    onChange={formik.handleChange}
                    value={formik.values.office}/>
                </div>
                <div className="col-lg-6">
                    <label>Age</label>
                    <input type="number" className="formcontrol"
                    id="age"
                    onChange={formik.handleChange}
                    value={formik.values.age}/>
                </div>
                <div className="col-lg-6">
                    <label>Start Date</label>
                    <input type="date" className="formcontrol"
                    id="startDate"
                    onChange={formik.handleChange}
                    value={formik.values.startDate}/>
                </div>
                <div className="col-lg-6">
                    <label>Salary</label>
                    <input type="number" className="formcontrol"
                    id="salary"
                    onChange={formik.handleChange}
                    value={formik.values.salary}/>
                </div>
                <div className="col-lg-3 mt-3">
                 <button type="submit" className="btn btn-primary">submit</button>
                </div>
          
            </form>
        </div>
      </div>
      </>
    )
}

export default Useredit;