import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const HouseContext = React.createContext();

export const HouseConsumer = HouseContext.Consumer;

const HouseProvider = ({ children }) => {
  const [houses, setHouses] = useState([])
  const navigate = useNavigate()

  const getAllHouses = () => {
    axios.get('/api/houses')
      .then( res => setHouses(res.data))
      .catch( err => console.log(err.response.data.errors.full_messages[0]) )
  }

  const addHouse = (house) => {
    let data = new FormData()
    let fileData = house.img == "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" ? '' : house.img
    data.append('house_name', house.house_name)
    data.append('address', house.address)
    data.append('city', house.city)
    data.append('file', fileData)
    data.append('img', house.img)
    axios.post('/api/houses', data )
      .then( res => setHouses([...houses, res.data]))
      .catch( err => console.log(err) )
  }

  const updateHouse = (id, house) => {
    let data = new FormData()
    data.append('name', house.house_name)
    data.append('address', house.address)
    data.append('city', house.city)
    data.append('file', house.img)
    axios.put(`/api/houses/${id}`, data )
      .then( res => {
        const newUpdatedHouses = houses.map( h => {
          if (h.id === id) {
            return res.data
          }
          return h
        })
        setHouses(newUpdatedHouses)
        navigate('/houses')
        window.location.reload()
      })
      .catch( err => console.log(err) )
  }

  const deleteHouse = (id) => {
    axios.delete(`/api/houses/${id}`)
      .then( res => {
        setHouses(houses.filter( u => u.id !== id ))
        navigate('/houses')
        window.location.reload()
      })
      .catch( err => console.log(err) )
  }

  return (
    <HouseContext.Provider value={{
      houses, 
      addHouse, 
      updateHouse,
      deleteHouse,
      getAllHouses
    }}>
      { children }
    </HouseContext.Provider>
  )
}

export default HouseProvider;