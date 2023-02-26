import React, { useEffect, useState } from 'react'
import './Home.css'
import { db } from '../config'
import { getDocs, collection, addDoc } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'


export const EventLists = () => {
    const navigate = useNavigate()
    const [searchText, setSearchText] = useState('');
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])

    const { id } = useParams();

    useEffect(() => {

        getTodosHandler();

    }, [])





    const getTodosHandler = async () => {
        try {

            const querySnapshot = await getDocs(collection(db, "events"));
            let todoList = [];
            querySnapshot.forEach((doc) => {
                todoList.push({
                    title: doc.data()?.title,
                    date: doc.data()?.date,
                    time: doc.data()?.time,
                    description: doc.data()?.description,
                    location: doc.data()?.location,
                    id: doc.id
                });
                setData(todoList)
            });


        } catch (error) {
            console.log('================catch====================');
            alert(error);
            console.log('====================================');
        }
    }


    const addAttendies = async () => {
        try {
            await addDoc(collection(db, "attendies"), ...data);
            alert("User joined")

        } catch (e) {
            alert("Error adding document: ", e);
        }
    }

    const handleModal = (item) => {
        setOpen(true)
        setData(item)
    }


    return (
        <motion.div
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth, transition: {duration: 0.1}}}
        >
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" className="active" aria-current="true" aria-label="Slide 1"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/b1.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Event Lists</h1>

                        </div>
                    </div>
                </div>

            </div>

            {/* list of events */}

            <div className='recent container' style={{ marginTop: "20px", paddingBottom: "20px !important" }}>
                <div className='d-flex justify-content-between'>
                    <h2 className='recent-Heading mb-0' style={{ color: "black" }}>{id ? "Details Page" : "List of Events..."}</h2>
                    <form class="example" action="/action_page.php" style={{ margin: "auto", maxWidth: "300px" }}>
                        <input type="text" placeholder="Search by Title.." name="search2" onChange={(e) => setSearchText(e.target.value)} />
                        <button type="submit"><i className="bi bi-search"></i></button>
                    </form>
                </div><hr className='headline' />
                <div className='row'>

                    {
                        data && data.filter((data) => data.title.includes(searchText)).map((data, index) => {
                            return (
                                <>

                                    <div className='col-md-9' style={{ marginBottom: "20px !important" }}>
                                        {
                                            id ?

                                                <>
                                                    <h3>Title: {data.title}</h3>
                                                    <h5>I'd: {data.id}</h5>
                                                    <h5>Date: {data.date}</h5>
                                                    <h5>Location: {data.location}</h5>
                                                    <p style={{ textAlign: "left !important" }}>{data.description} </p>
                                                </>

                                                :

                                                <>
                                                    <h3>Title: {data.title}</h3>
                                                    <p style={{ textAlign: "left !important" }}>{data.description} </p>
                                                </>
                                        }


                                    </div>
                                    <div className='col-md-3'>
                                        {
                                            id ? <><button className='btn btn-success' onClick={addAttendies}>Join</button>
                                            <button className='btn btn-info' onClick={()=>navigate('/eventList')}>Back</button>
                                            </> 
                                            :
                                             <><button className='btn btn-success' onClick={addAttendies}>Join</button><button
                                                className='btn btn-primary'
                                                style={{ marginRight: '10px' }}
                                                onClick={() => navigate(`/check/${data.id}`)}
                                            >   View
                                            </button></>
                                        }





                                    </div>
                                    <hr />

                                </>
                            )
                        })
                    }




                </div>
            </div>
        </motion.div>
    )
}
