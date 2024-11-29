import React from 'react'
import logo from '../myimages/logo.jpeg';
import { IoMdMail } from "react-icons/io"; 
import { FaPhoneAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light px-5">
          <div className="container-fluid d-flex justify-content-between">
              <div className='navbar-left d-flex align-items-center'>
              <img src={logo} alt="Hospital Logo" className="logo" style={{ width: '50px', height: 'auto' }} />
                  <div className="text-primary hosp-name">URJI MEDICAL CENTRE</div>
              </div>
              <div className="navbar-right d-flex flex-column flex-lg-row align-items-center">
                  <p className="mb-0 me-3 text-primary text-hover-underline"><FaPhoneAlt className="fs-7" /> (123) 456-7890</p>
                  <p className="mb-0 me-3 text-primary text-hover-underline"><IoMdMail className="fs-5" /> urjimedical@gmail.com</p>
                  <button className="btn btn-primary">Contact Us</button>
              </div>
          </div>
    </nav>

          <nav class="navbar navbar-expand-lg navbar-light bg-primary px-5">
              <div class="container-fluid">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                              <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                          </li>
                        
                          <li className="nav-item dropdown">
                              <a className="nav-link active dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  About Us
                              </a>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <li><a className="dropdown-item" href="#">History</a></li>
                                  <li><a className="dropdown-item" href="#">Our Team Members</a></li>
                              </ul>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active text-white" aria-current="page" href="#">Make Appointment</a>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link active dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Our Services
                              </a>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <li><a className="dropdown-item" href="#">Pharmacy</a></li>
                                  <li><a className="dropdown-item" href="#">Laboratory</a></li>
                                  <li><a className="dropdown-item" href="#">Radiology</a></li>
                              </ul>
                          </li>
                          
                      </ul>
                      <form class="d-flex">
                          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      </form>
                  </div>
              </div>
          </nav>
      </>
  )
}

export default Navbar
