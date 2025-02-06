import React, { useState } from "react";
import axios from "axios";

function AddStudent() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");


  function sendData(e){
    e.preventDefault();
    
    const newStudent = {
      name, age , gender , address
    }
      axios .post("http://localhost:8070/student/add", newStudent).then(()=>{
        alert("Student Added")
      }).catch((err)=>{
        alert(err)
      })
  }

    return(
        <div className="container">
            <form onSubmit={sendData}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Student Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
    onChange={(e)=>{
      setName(e.target.value)
    }}>
    </input>
  </div>

  <div className="mb-3">
    <label htmlFor="age" className="form-label">Student Age</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
    onChange={(e)=>{
      setAge(e.target.value)
    }}>
    </input>
  </div>


  <div className="mb-3">
    <label htmlFor="gender" className="form-label">Student gender</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
    onChange={(e)=>{
      setGender(e.target.value)
    }}></input>
  </div>

  <div className="mb-3">
    <label htmlFor="address" className="form-label">Student Address</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
    onChange={(e)=>{
      setAddress(e.target.value)
    }}></input>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    );
}

export default AddStudent;