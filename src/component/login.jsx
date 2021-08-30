import React from 'react'
import { Link} from "react-router-dom";

function login() {
    return (
        <div className="container">
            <div className="col-4 offset-4 mt-5">
      <div className="shadow p-5">
            <h3 className="mb-4">Login Now </h3>
         <input className="form-control my-2" type="text" placeholder="Username" />
           <input className="form-control " type="text" placeholder="Password" />
           <div className="d-flex justify-content-between align-items-center ">
           <button className="mt-3 btn btn-primary">Submit</button>
           <Link className="text-dark " to="/signup"> Sign up</Link>
           </div>
          </div>            
            </div>
        </div>
    )
}

export default login
