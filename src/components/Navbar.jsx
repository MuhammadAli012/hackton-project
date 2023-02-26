import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../config'
import { useNavigate } from 'react-router-dom'

export const Navbar = ({ user }) => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'><h2 style={{ color: 'white', fontSize: '28px' }}>The Events</h2></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>



            </ul>
            <form className="d-flex">
              <Link className="nav-link" to='/eventList'>Event Lists</Link>
              <Link className="nav-link" to='/attendiesList'>Attendies Lists</Link>
              {
                user ? <>
                  <Link className="nav-link" to='/createEvent'>Add Event</Link>
                  <button className="btn btn-outline-danger" onClick={() => {
                    signOut(auth)
                    navigate('/login')
                  }}>Logout</button>
                </> : <>
                  <Link className="nav-link" to='/login'>Login</Link>
                  <Link className="nav-link" to='/signup'>Sign Up</Link>
                </>
              }





            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
