import { Card, Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { HouseConsumer } from '../../providers/HouseProvider';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HouseShow = ({ id, house_name, address, city, img, avg_candy, avg_scary, deleteHouse }) => {
  const [showing, setShow] = useState(false)

  return (
    <>
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={img} width='200px' height='200px' />
        <Card.Body>
          <Card.Title>{house_name}</Card.Title>
          <Button 
            variant="primary" 
            onClick={() => setShow(true)}
          >
            Show
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
                    <Link 
                      to={`/${id}/updateHouse`}
                      state={{ house_name, address, city, img, avg_candy, avg_scary }}
                    >
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      onClick={() => deleteHouse(id)}
                    >
                      Delete
                    </Button>
                    <Button>Favorites</Button>
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