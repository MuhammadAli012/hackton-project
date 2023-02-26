import React, { useEffect, useState } from 'react'
import './Home.css'
import { db } from '../config'
import { getDocs, collection } from 'firebase/firestore'
import {motion} from 'framer-motion'


export const AttendiesList = () => {
const [searchText, setSearchText] = useState('')
    const [data, setData] = useState([])
    useEffect(() => {

        getTodosHandler();

    }, [])





    const getTodosHandler = async () => {
        try {

            const querySnapshot = await getDocs(collection(db, "attendies"));
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
                    <h2 className='recent-Heading mb-0' style={{ color: "black" }}>List of Users Who Join Events...</h2>
                    <form class="example" action="/action_page.php" style={{margin:"auto",maxWidth:"300px"}}>
                        <input type="text" placeholder="Search by Title.." name="search2" onChange={(e)=>setSearchText(e.target.value)}/>
                            <button type="submit"><i className="bi bi-search"></i></button>
                    </form>
                </div><hr className='headline' />
                <div className='row'>


                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID</th>
                                <th scope="col">TITLE</th>
                                <th scope="col">DESCRIPTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.filter((data)=>data.title.includes(searchText)).map((item, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                        </tr>
                                    )
                                })
                            }



                        </tbody>
                    </table>

                </div>
            </div>
        </motion.div>
    )
}
