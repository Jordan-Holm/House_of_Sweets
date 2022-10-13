import { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Button, Card, Modal, Container, Row, Col, ToggleButton, Image } from 'react-bootstrap';
import { FavsConsumer } from '../../providers/FavsProvider';

const FavsShow = ({ id, deleteFavs, userId, house_id }) => {
  const [house, setHouse] = useState({ 
    house_name: '',
    address: '',
    avg_candy: 0,
    avg_scary: 0,
    city: '',
    img: ''
  })
  
  useEffect( () => {
    axios.get(`/api/houses/${house_id}`)
      .then( res => setHouse( res.data ))
      .catch( err => console.log(err))
  }, [] )

  const { 
    house_name,
    address,
    avg_candy,
    avg_scary,
    city,
    img
  } = house
  return (
    <>
      <ListGroup.Item>
        {house_name}
        <Button
          variant='danger'
          onClick={() => deleteFavs(userId, id)}
        >
          delete
        </Button>
      </ListGroup.Item>
    </>
  )
}

const ConnectedFavsShow = (props) => (
  <FavsConsumer>
    { value => <FavsShow {...value} {...props} />}
  </FavsConsumer>
)

export default ConnectedFavsShow;