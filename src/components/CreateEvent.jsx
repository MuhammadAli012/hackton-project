import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../config'
import { useNavigate } from 'react-router-dom'


export const CreateEvent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')

  const onDataSubmitHandler = async (e) => {
    e.preventDefault()
    const newDoc = {
      title,
      date,
      time,
      description,
      location
    }
    try {
      const docRef = await addDoc(collection(db, "events"), newDoc);
      setData([...data, { ...newDoc, id: docRef.id }])
      setDescription('');
      setTitle('');
      setDate('');
      setTime('');
      setLocation('');
      navigate('/')
    } catch (e) {
      alert("Error adding document: ", e);
    }
  }





  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-5  m-auto">
          <h2>Add Event</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" required value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Date of Event</label>
              <input type="date" className="form-control" required value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Time of Event</label>
              <input type="time" className="form-control" required value={time} onChange={(e) => setTime(e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Location</label>
              <input type="text" className="form-control" required value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} >{description}</textarea>
            </div>


            <button type="submit" onClick={onDataSubmitHandler} className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

    </div>


  )
}
