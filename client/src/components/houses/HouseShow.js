import { Card, ListGroup, Modal, Button, Container, Row, Col, Image, ToggleButton, ModalTitle } from 'react-bootstrap';
import { HouseConsumer } from '../../providers/HouseProvider';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HouseForm from './HouseForm';
import ScoresForm from '../scores/ScoresForm';
import Scores from '../scores/Scores';
import axios from 'axios';
import { AuthConsumer } from '../../providers/AuthProvider';
import { FavsConsumer } from '../../providers/FavsProvider';
import { ScoreConsumer } from '../../providers/ScoreProvider';

const HouseShow = ({ id, user, addFavs,  house_name, address, city, img, avg_candy, avg_scary, deleteHouse, updateHouse, addScore }) => {
  const [addingScore, setScoreAdd] = useState(false)
  useEffect(() => {
    const getAverage = async() => {
      await candyAverage(id);
      await scaryAverage(id);
    }
    getAverage()
  }, [])

  const [candyAvg, setCandyAvg] = useState(1)

  const candyAverage = (id) => {
    axios.get(`/api/houses/${id}/candyAverage`)
      .then( res => {
        if (typeof res.data == "number") {
          setCandyAvg(res.data)
        }
        else {
          setCandyAvg("Not Rated")
        }
      })
      .catch( err => console.log(err) )
  }

  const [scaryAvg, setScaryAvg] = useState(1)

  const scaryAverage = (id) => {
    axios.get(`/api/houses/${id}/scaryAverage`)
      .then( res => {
        if (typeof res.data == "number") {
          setScaryAvg(res.data)
        }
        else {
          setScaryAvg("Not Rated")
        }
      })
      .catch( err => console.log(err) )
  }
  
  return (
    
    <>
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={img} width='200px' height='200px' />
        <Card.Body>
          <Card.Title>{house_name}</Card.Title>
          <Card.Subtitle>City: {city}</Card.Subtitle>
          <ListGroup variant='flush'>
            <ListGroup.Item>Candy Rating: {candyAvg}</ListGroup.Item>
            <ListGroup.Item>Scary Rating: {scaryAvg}</ListGroup.Item>
          </ListGroup>
          <Link 
            to={`/houses/${id}`}
            state={{
              address,
              city,
              img,
              house_name,
              avg_candy,
              avg_scary,
            }}
            >
            <Button 
              variant="primary"
              id={id}
            >
              View
            </Button>
          </Link>
          <Button onClick={ () => setScoreAdd(true)}>
            Rate
          </Button>
          <Modal show={addingScore} onHide={() => setScoreAdd(false)}>
            <Modal.Header closeButton>
              <Modal.Body>
                <ScoresForm 
                  addScore={addScore}
                  houseId={id}
                  setScoreAdd={setScoreAdd}
                />
              </Modal.Body>
            </Modal.Header>
          </Modal>
        </Card.Body>
      </Card>
    </>
  )
}

const ConnectedHouseShow = (props) => (
  <HouseConsumer>
    { value => <HouseShow {...props} {...value} />}
  </HouseConsumer>
)

const ConnectedAuthProvider = (props) =>  (
  <AuthConsumer>
    { value => <ConnectedHouseShow {...props} {...value} />}
  </AuthConsumer>
)

const ConnectedFavoriteProvider = (props) => (
  <FavsConsumer>
    { value => <ConnectedAuthProvider {...props} {...value} />}
  </FavsConsumer>
)

const ConnectedScoresProvider = (props) => (
  <ScoreConsumer>
    { value => <ConnectedFavoriteProvider {...props} {...value} /> }
  </ScoreConsumer>
)

export default ConnectedScoresProvider;
