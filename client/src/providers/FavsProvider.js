import React, { useState } from 'react';
import axios from 'axios';

export const FavsContext = React.createContext();

export const FavsConsumer = FavsContext.Consumer;

const FavsProvider = ({ children }) => {
  const [favorites, setFavs] = useState([])

  const getAllFavs = (userId) => {
    axios.get(`/api/users/${userId}/favorites`)
      .then( res => setFavs(res.data) )
      .catch( err => console.log(err) )
  }

  const addFavs = (ids) => {
    console.log()
    axios.post(`/api/users/${ids.userId}/favorites`, { user_id: ids.userId, house_id: ids.houseId })
      .then( res => setFavs([...favorites, res.data]))
      .catch( err => console.log(err) )
  }

  const updateFavs = (userId, id, favorite) => {
    axios.put(`/api/users/${userId}/favorites/${id}`, { favorite })
      .then( res => {
        const newUpdatedFavs = favorites.map( e => {
          if (e.id === id) {
            return res.data
          }
          return e
        })
        setFavs(newUpdatedFavs)
        window.location.reload()
      })
      .catch( err => console.log(err) )
  }

  const deleteFavs = (userId, id) => {
    axios.delete(`/api/users/${userId}/favorites/${id}`)
      .then( res => setFavs( favorites.filter( e => e.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <FavsContext.Provider value={{
      favorites,
      getAllFavs,
      addFavs,
      updateFavs, 
      deleteFavs,
    }}>
      { children }
    </FavsContext.Provider>
  )
}

export default FavsProvider;