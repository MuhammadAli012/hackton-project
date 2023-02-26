import React from 'react'
import './Home.css'
import {motion} from 'framer-motion'


export const Home = () => {
 

  return (
    <motion.div
    initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth, transition: {duration: 0.1}}}
            >
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/b1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Checks Your Favorites Here</h1>

            </div>
          </div>
          <div className="carousel-item">
            <img src="b2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>You Can Add Your Event For your Popularity</h1>

            </div>
          </div>
          <div className="carousel-item">
            <img src="b3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{ color: "black" }}>Become member of our Community</h1>

            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* intro */}

      <div className='intro container'>
        <h2 className='intro-Heading'>Introduction</h2><hr className='introHeadline' />
        <p className='intro-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt earum sit laudantium commodi explicabo
          , deserunt aliquid cum iste necessitatibus sapiente consectetur unde doloremque id illo atque architecto, q
          uod tempore natus.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt earum sit laudantium commodi explicabo
          , deserunt aliquid cum iste necessitatibus sapiente consectetur unde doloremque id illo atque architecto, q
          uod tempore natus.<br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt earum sit laudantium commodi explicabo
          , deserunt aliquid cum iste necessitatibus sapiente consectetur unde doloremque id illo atque architecto, q
          uod tempore natus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt earum sit laudantium commodi explicabo
          , deserunt aliquid cum iste necessitatibus sapiente consectetur unde doloremque id illo atque architecto, q
          uod tempore natus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt earum sit laudantium commodi explicabo
          , deserunt aliquid cum iste necessitatibus sapiente consectetur unde doloremque id illo atque architecto, q
          uod tempore natus.
        </p>

      </div>

      

      {/* {recent popular events} */}
      <div className='recent container' style={{marginTop:"30px !important"}}>
        <h2 className='recent-Heading'>Recent Popular Events...</h2><hr className='headline' />
        <div className='row' style={{ marginTop: '20px' }}>
          <div className='col-md-4'>
            <div className="card" style={{ width: "18rem" }}>
              <img src="01.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Event Title</h5>
                <p className="card-text">Event Title Event Title Event Title Event Title Event Title Event Title Event Title Event Title </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card" style={{ width: "18rem" }}>
              <img src="01.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Event Title</h5>
                <p className="card-text">Event Title Event Title Event Title Event Title Event Title Event Title Event Title Event Title </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card" style={{ width: "18rem" }}>
              <img src="01.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Event Title</h5>
                <p className="card-text">Event Title Event Title Event Title Event Title Event Title Event Title Event Title Event Title </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </motion.div>
  )
}
