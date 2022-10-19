import { Card, ListGroup, Modal, Button, Container, Row, Col, Image, ToggleButton, ModalTitle } from 'react-bootstrap';
import { HouseConsumer } from '../../providers/HouseProvider';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HouseForm from './HouseForm';
import axios from 'axios';
import { AuthConsumer } from '../../providers/AuthProvider';
import { FavsConsumer } from '../../providers/FavsProvider';

const HouseShow = ({ id, user, addFavs,  house_name, address, city, img, avg_candy, avg_scary, deleteHouse, updateHouse }) => {

  return (
    
    <>
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={img} width='200px' height='200px' />
        <Card.Body>
          <Card.Title>{house_name}</Card.Title>
          <Card.Subtitle>City: {city}</Card.Subtitle>
          <ListGroup variant='flush'>
            <ListGroup.Item>Candy Rating: {avg_candy}</ListGroup.Item>
            <ListGroup.Item>Scary Rating: {avg_scary}</ListGroup.Item>
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
          <Button>
            Rate
          </Button>
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

const ConnectedFavoriteProfider = (props) => (
  <FavsConsumer>
    { value => <ConnectedAuthProvider {...props} {...value} />}
  </FavsConsumer>
)

export default ConnectedFavoriteProfider;