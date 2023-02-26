import React,{useEffect, useState} from 'react'
import { Home } from './components/Home';
import { CreateEvent } from './components/CreateEvent';

import  Footer  from './components/Footer';
import { BrowserRouter} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AnimatedRoute } from './components/AnimatedRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config';

function App() {
  
  const [user, setUser] = useState(null)
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
            if(user) setUser(user)
            else setUser(null)
      })
    }, [])
  return (
    <>
      <BrowserRouter>
        <Navbar user={user}/>
        <AnimatedRoute user={user} />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
