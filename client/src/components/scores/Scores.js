import { useEffect } from 'react';
import { ScoreConsumer } from '../../providers/ScoreProvider';
import { HouseConsumer } from '../../providers/HouseProvider';
import { AuthConsumer } from '../../providers/AuthProvider';
import ScoresList from './ScoresList';
import styled from 'styled-components';
const Scores = ({ houseId, user, addScores, getAllScores, updateScores, deleteScores, scores }) => {

  useEffect( () => {
    getAllScores(houseId)
  }, [])

  return (
    <>
      <h1 style={{ color: "black" }}>User Scores</h1>
      <ScoresList 
        scores={scores}
        houseId={houseId}
        userId={user.id}
      />
    </>
  )
}

const ConnectedScores = (props) => (
    <ScoreConsumer>
      { value => <Scores {...value} {...props} /> }
    </ScoreConsumer>
  )
const ConnectedAuthProvider = (props) => (
    <AuthConsumer>
      { value => <ConnectedScores {...value} {...props} /> }
    </AuthConsumer>
  )
const ConnectedHouseProvider = (props) => (
    <HouseConsumer>
      { value => <ConnectedAuthProvider {...value} {...props} /> }
    </HouseConsumer>
  )
  
  export default ConnectedHouseProvider;