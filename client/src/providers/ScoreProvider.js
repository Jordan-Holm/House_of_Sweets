import React, { useState } from 'react';
import axios from 'axios';

export const ScoreContext = React.createContext();

export const ScoreConsumer = ScoreContext.Consumer;

const ScoreProvider = ({ children }) => {
  const [scores, setScores] = useState([])

  const getAllScores = (houseId) => {
    axios.get(`/api/houses/${houseId}/scores`)
      .then( res => setScores(res.data) )
      .catch( err => console.log(err) )
  }

  const addScores = (ids) => {
    console.log()
    axios.post(`/api/houses/${ids.houseId}/scores`, { user_id: ids.userId, house_id: ids.houseId })
      .then( res => setScores([...scores, res.data]))
      .catch( err => console.log(err) )
  }

  const updateScores = (houseId, id, score) => {
    axios.put(`/api/houses/${houseId}/scores/${id}`, { score })
      .then( res => {
        const newUpdatedScores = scores.map( e => {
          if (e.id === id) {
            return res.data
          }
          return e
        })
        setScores(newUpdatedScores)
        window.location.reload()
      })
      .catch( err => console.log(err) )
  }

  const deleteScores = (houseId, id) => {
    axios.delete(`/api/houses/${houseId}/scores/${id}`)
      .then( res => setScores( scores.filter( e => e.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <ScoreContext.Provider value={{
      scores,
      getAllScores,
      addScores,
      updateScores, 
      deleteScores,
    }}>
      { children }
    </ScoreContext.Provider>
  )
}

export default ScoreProvider;