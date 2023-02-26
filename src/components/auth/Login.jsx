import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { auth, signInWithEmailAndPassword } from '../../config'
import {motion} from 'framer-motion'

export const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const getUser = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      alert("SuccessFully Login")
      navigate('/')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <motion.div  initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
    <div className='loginMain container py-5 '>
      
      <div className="row">
        <div className="col-lg-5  m-auto">
        <h2>Login </h2>
          <form>
            <div className="mb-3">
              <input type="email" placeholder='Enter Email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />

            </div>
            <div className="mb-3">
        
              <input type="password" placeholder='Password' className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button onClick={getUser} className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>

    </div>
    </motion.div>
  )
}
