import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const HouseContext = React.createContext();

export const HouseConsumer = HouseContext.Consumer;

const HouseProvider = ({ children }) => {
  const [houses, setHouses] = useState([])
  const navigate = useNavigate()

  useEffect( () => {
    axios.get('/api/houses')
      .then( res => setHouses(res.data))
      .catch( err => console.log(err) )
  }, [])

  const addHouse = (house) => {
    axios.post(`/api/houses`, { house })
      .then( res => setHouses([...houses, res.data]))
      .catch( err => console.log(err) )
  }

  const updateHouse = (id, house) => {
    axios.put(`/api/houses/${id}`, { houses })
      .then( res => {
        const newUpdatedHouses = house.map( h => {
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
    }}>
      { children }
    </HouseContext.Provider>
  )
}

export default HouseProvider;