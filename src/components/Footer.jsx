import React from 'react'

import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <footer className="footer-section bg-dark">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-3">
                            <Link to="/">
                                <img alt="logo" className="logo-img" src='/log.png' />
                            </Link>

                            <p className='text-white pt-4 pe-5'>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div class="col-md-3">
                            <h6 class="text-uppercase fw-bold mb-4 fs-2 text-white">
                                Events
                            </h6>
                            <p className='text-white'>Party Event </p>
                            <p className='text-white'>Birthday Event</p>
                            <p className='text-white'>Wedding Event</p>
                            {/* <p>
            <a href="#!" class="text-reset"></a>
          </p> */}
                        </div>

                        <div class="col-md-3">
                            <h6 class="text-uppercase fw-bold mb-4 fs-2 text-white">
                                Links
                            </h6>
                            <Link to='/event'>
                                <p className='text-white'>Events </p>
                            </Link>

                            <Link to='/login'>
                                <p className='text-white'>Log in </p>
                            </Link>

                            <Link to='/signup'>
                                <p className='text-white'>Sign Up</p>
                            </Link>
                            {/* <p>
            <a href="#!" class="text-reset"></a>
          </p> */}
                        </div>
                        <div className="col-md-3">
                            <h6 class="text-uppercase fw-bold mb-4 fs-2 text-white">Contact</h6>
                            <p className='text-white'><i class="bi bi-house-check-fill"></i> New York, NY 10012, US</p>
                            <p className='text-white'><i class="bi bi-envelope-check-fill"></i>
                                info@example.com
                            </p>
                            <p className='text-white'><i class="bi bi-telephone-fill"></i> + 01 214 837 98</p>
                        </div>
                    </div>
                </div>

            </footer>

            <div className="copy-right">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 d-flex align-item-center justify-content-between py-1">
                            <p className='mb-0'>© Copyright Event planner. All Rights Reserved</p>
                            <p className='mb-0'>Design by Muhammad Ali</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer