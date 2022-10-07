import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const FavsContext = React.createContext();

export const FavsConsumer = FavsContext.Consumer;

const FavsProvider = ({ children }) => {
  const [favs, setFavs] = useState([])
  const navigate = useNavigate()

  useEffect( () => {
    axios.get('/api/favs')
      .then( res => setHouses(res.data))
      .catch( err => console.log(err) )
  }, [])

  const addFav = (favs) => {
    axios.post(`/api/favs`, { favs })
      .then( res => setFavs([...favs, res.data]))
      .catch( err => console.log(err) )
  }

  const deleteFav = (id) => {
    axios.delete(`/api/favs/${id}`)
      .then( res => {
        setHouses(favs.filter( f => f.id !== id ))
        navigate('/favs')
        window.location.reload()
      })
      .catch( err => console.log(err) )
  }

  return (
    <FavsContext.Provider value={{
      favs, 
      addFav, 
      deleteFav,
    }}>
      { children }
    </FavsContext.Provider>
  )
}

export default FavsProvider;