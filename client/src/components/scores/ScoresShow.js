import { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Button, Card, Modal, Container, Row, Col,  Image } from 'react-bootstrap';
import { ScoreConsumer } from '../../providers/ScoreProvider';
import { AuthConsumer } from '../../providers/AuthProvider';

import ScoresForm from './ScoresForm';

const ScoresShow = ({ id, deleteScore, updateScore, user, user_id, houseId, candy, scary, comment }) => {
  const [userDb, setUser] = useState({ 
    nickname: '',
  })
  const [editing, setScoreEdit] = useState(false)
  
  useEffect( () => {
    axios.get(`/api/users/${user_id}`)
      .then( res => setUser( res.data ))
      .catch( err => console.log(err))
  }, [] )

  const checkForUser = () => {
    const currentUser = user.id
    if (user_id === currentUser) {
      return (
        <>
          <Button
            onClick={ () => setScoreEdit(true) }
          >
            Edit
          </Button>
          <Modal show={editing} onHide={() => setScoreEdit(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Update House</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ScoresForm 
                updateScore={updateScore} 
                setScoreEdit={setScoreEdit} 
                id={id}
                houseId={houseId}
                candy={candy}
                scary={scary}
                comment={comment}
              />
            </Modal.Body>
          </Modal>

          <Button
            variant='danger'
            onClick={ () => deleteScore(houseId, id) }  
          >
          X
          </Button> 
        </>
      )
    }
  }

  const { 
    nickname
  } = userDb 
  return (
    <>
      {/* <ListGroup.Item>
        {nickname}
        <Button
          variant='danger'
          onClick={() => deleteScores(houseId, id)}
        >
          delete
        </Button>
      </ListGroup.Item> */}
      <Card style={{width: '12rem'}}>
      <Card.Body>
        { checkForUser() } 
        <Card.Title>
          {nickname}'s Rating  
        </Card.Title> 
        <ListGroup variant="flush">
            <ListGroup.Item>
              candy: {candy}
            </ListGroup.Item>
            <ListGroup.Item>
              scary: {scary}
            </ListGroup.Item>
        </ListGroup>
        <Card.Text>
          {comment}
        </Card.Text>  
      </Card.Body>
      </Card>
    </>
  )
}

const ConnectedScoresShow = (props) => (
  <ScoreConsumer>
    { value => <ScoresShow {...value} {...props} />}
  </ScoreConsumer>
)

const ConnectedAuthScores = (props) => (
  <AuthConsumer>
    { value => <ConnectedScoresShow {...value} {...props} />}
  </AuthConsumer>
)

export default ConnectedAuthScores;