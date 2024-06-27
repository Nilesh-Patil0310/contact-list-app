import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="Home-page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "90px" }}>Contact List</h2>
          <h3 style={{ fontSize: "50px" }}>FOR YOU</h3>
          <p className="mb-0" style={{ color: "silver" }}>
            Checkout The Contacts From Here.
          </p>
          <Link to="/contacts" className="viewContact my-3">View Contacts</Link>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-item-end flex-column"
          style={{ height: "91.5vh" }}
        >
          <img
            className="img-fluid homeimg"
            src="https://cdn-icons-png.flaticon.com/512/2648/2648554.png"
            alt="/"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
