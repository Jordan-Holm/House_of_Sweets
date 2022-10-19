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

  const addScore = (houseId, score) => {
    axios.post(`/api/houses/${houseId}/scores`, { score })
      .then( res => setScores([...scores, res.data]))
      .catch( err => console.log(err) )
  }

  const updateScore = (houseId, id, score) => {
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

  const deleteScore = (houseId, id) => {
    axios.delete(`/api/houses/${houseId}/scores/${id}`)
      .then( res => setScores( scores.filter( e => e.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <ScoreContext.Provider value={{
      scores,
      getAllScores,
      addScore,
      updateScore, 
      deleteScore,
    }}>
      { children }
    </ScoreContext.Provider>
  )
}

export default ScoreProvider;