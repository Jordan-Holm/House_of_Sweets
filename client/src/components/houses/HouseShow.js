import { Card, ListGroup, Modal, Button, Container, Row, Col, Image, ToggleButton } from 'react-bootstrap';
import { HouseConsumer } from '../../providers/HouseProvider';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HouseForm from './HouseForm';

const HouseShow = ({ id, house_name, address, city, img, avg_candy, avg_scary, deleteHouse, updateHouse }) => {
  const [showing, setShow] = useState(false)
  const [checked, setChecked] = useState(false)
  const [editing, setEdit] = useState(false)
  
  const toggleFav = () => {
    if (checked) {
      return (
        <p>Favorited</p>
      )
    } else {
      return (
        <p>Favorite</p>
      )
    }
  }
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
          <Button 
            variant="primary" 
            onClick={() => setShow(true)}
          >
            View
          </Button>
          <Button>
            Rate
          </Button>

          <Modal show={showing} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{house_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col>
                    Address: {address}
                    <br />
                    City: {city}
                    Avg_candy: {avg_candy}
                    <br />
                    Avg_scary: {avg_scary}
                    <br/>
                      <ToggleButton
                        id='toggle-check'
                        type="checkbox"
                        checked={checked}
                        value='1'
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                      >
                        { toggleFav() }
                      </ToggleButton>
                      <Button>Rate</Button>
                      <Button 
                        onClick={() => setEdit(true)}
                      >
                        Edit
                      </Button>

                      <Modal show={editing} onHide={() => setEdit(false)}>
                        <Modal.Header closeButton>
                          <Modal.Title>Update House</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <HouseForm 
                            updateHouse={updateHouse} 
                            setEdit={setEdit} 
                            id={id}
                            house_name={house_name}
                            address={address}
                            city={city}
                            img={img}
                          />
                        </Modal.Body>
                      </Modal>
                    <Button
                      onClick={() => deleteHouse(id)}
                    >
                      Delete
                    </Button>
                  </Col>
                  <Col>
                    <Image src={img} width='200px' height='200px' />
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
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

export default ConnectedHouseShow;