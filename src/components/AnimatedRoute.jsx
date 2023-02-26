import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import {useLocation} from 'react-router-dom'
import { Home } from './Home';
import { Login } from './auth/Login';
import { SignUp } from './auth/SignUp';
import { EventLists } from './EventLists';
import { AttendiesList } from './attendiesList';
import { ProtectedRoute } from './ProtectedRoute';
import { CreateEvent } from './CreateEvent';

export const AnimatedRoute = ({ user }) => {
    const location = useLocation();
    return (
        <>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/eventList' element={<EventLists />} />
                <Route path='/check/:id' element={<EventLists />} />
                <Route path='/attendiesList' element={<AttendiesList />} />

                <Route
                    path="/createEvent"
                    element={
                        <ProtectedRoute user={user}>
                            <CreateEvent />
                        </ProtectedRoute>
                    }
                />


            </Routes>
            </AnimatePresence>
        </>
    )
}
