import React from 'react'
import { Link} from "react-router-dom";
function menu() {
    return (
        <div className="container-fluid p-0 bg-light ">
            <div className="container">
        <nav className="navbar navbar-expand-lg text-dark navbar-light ">
        <a className="navbar-brand text-reset" href="#"><h3>Test</h3></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-nav ">
        <Link className="text-reset" to="/home">Home</Link>
        </div>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <Link className="text-reset btn btn-primary mx-2" to="/login">Login Now</Link>
            <Link className="text-reset btn btn-success" to="/signup">Sign Up</Link>
          </div>
        </div>
      </nav>
            </div>
        </div>
    )
}

export default menu
