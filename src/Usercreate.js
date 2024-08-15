import React, { startTransition } from "react";
import { useFormik } from "formik";
import { json, useNavigate } from "react-router-dom";

function Usercreate() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: 0,
      startDate: "",
      salary: "",
    },
    onSubmit: async (values) => {
      try {
        await fetch("https://61974899af46280017e7e4ed.mockapi.io/users", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "content-type": "application/json",
          },
        });
        navigate("/user");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Usercreate</h1>
      </div>

      <div className="container">
        <div className="row">
          <form onSubmit={formik.handleSubmit}>
            <div className="col-lg-6">
              <label>Name</label>
              <input
                type="text"
                className="formcontrol"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input
                type="text"
                className="formcontrol"
                id="position"
                onChange={formik.handleChange}
                value={formik.values.position}
              />
            </div>
            <div className="col-lg-6">
              <label>Office</label>
              <input
                type="text"
                className="formcontrol"
                id="office"
                onChange={formik.handleChange}
                value={formik.values.office}
              />
            </div>
            <div className="col-lg-6">
              <label>Age</label>
              <input
                type="number"
                className="formcontrol"
                id="age"
                onChange={formik.handleChange}
                value={formik.values.age}
              />
            </div>
            <div className="col-lg-6">
              <label>Start Date</label>
              <input
                type="date"
                className="formcontrol"
                id="startDate"
                onChange={formik.handleChange}
                value={formik.values.startDate}
              />
            </div>
            <div className="col-lg-6">
              <label>Salary</label>
              <input
                type="number"
                className="formcontrol"
                id="salary"
                onChange={formik.handleChange}
                value={formik.values.salary}
              />
            </div>
            <div className="col-lg-3 mt-3">
              <button type="submit" className="btn btn-primary">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Usercreate;
