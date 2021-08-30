import React from 'react'
import { Link} from "react-router-dom";


function signup() {
    return (
        <div className="container">
        <div className="col-4 offset-4 mt-5">
        <div className="shadow p-5">
        <h3 className="mb-4">Signup Now </h3>
       <input className="form-control my-2" type="text" placeholder="Name" />
       <input className="form-control my-2" type="number" placeholder="Phone" />
       <input className="form-control my-2" type="text" placeholder="E-mail" />
       <input className="form-control my-2" type="password" placeholder="Password" />
       <div className="d-flex justify-content-between align-items-center ">
           <button className="mt-3 btn btn-primary">Submit</button>
           <Link className="text-dark " to="/login">I have already account</Link>
           </div>
      </div>            
        </div>
    </div>
    )
}

export default signup
