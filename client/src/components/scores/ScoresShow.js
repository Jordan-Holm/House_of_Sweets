import { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Button, Card, Modal, Container, Row, Col,  Image } from 'react-bootstrap';
import { ScoreConsumer } from '../../providers/ScoreProvider';

const ScoresShow = ({ id, deleteScores, userId, houseId, candy, scary, comment }) => {
  const [user, setUser] = useState({ 
    nickname: '',
  })
  
  useEffect( () => {
    axios.get(`/api/users/${userId}`)
      .then( res => setUser( res.data ))
      .catch( err => console.log(err))
  }, [] )

  const { 
    nickname
  } = user 
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

export default ConnectedScoresShow;