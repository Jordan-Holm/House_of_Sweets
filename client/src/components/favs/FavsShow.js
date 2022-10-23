import { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Button, ButtonGroup, Card, Modal, Container, Row, Col, Image } from 'react-bootstrap';
import { FavsConsumer } from '../../providers/FavsProvider';
import { mainP } from '../shared/Style';

const FavsShow = ({ id, deleteFavs, userId, house_id }) => {
  const [house, setHouse] = useState({ 
    house_name: '',
    address: '',
    avg_candy: 0,
    avg_scary: 0,
    city: '',
    img: ''
  })
  const [showing, setShow] = useState(false)
  
  useEffect( () => {
    axios.get(`/api/houses/${house_id}`)
      .then( res => setHouse( res.data ))
      .catch( err => console.log(err))
  }, [] )

  useEffect(() => {
    const getAverage = async() => {
      await candyAverage(house_id);
      await scaryAverage(house_id);
    }
    getAverage()
  }, [])

  const [candyAvg, setCandyAvg] = useState(1)

    const candyAverage = (house_id) => {
      axios.get(`/api/houses/${house_id}/candyAverage`)
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
        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={img} width='200px' height='175px' />
        <Card.Body>
          <>{house_name}</>
                <Row>
                  <Col>
                      <mainP>{address}</mainP>
                  </Col>
                  <Col>
                    <p>SR: {scaryAvg}</p>
                  </Col>
                </Row>
                  <Row>
                    <Col>
                      <mainP>{city}</mainP>
                    </Col>
                    <Col>
                      <p>CR: {candyAvg}</p>
                    </Col>
                  </Row>
          <ButtonGroup >
            <Button 
                variant="primary" 
                onClick={() => setShow(true)}
            >
              View
            </Button>
            <Button 
              variant="danger" 
              onClick={() => deleteFavs(userId, id)}
            >
              X
            </Button>
          </ButtonGroup>
          {/* <ListGroup>
          
            <Button 
              variant="primary" 
              onClick={() => setShow(true)}
            >
              View
            </Button>
            <Button 
              variant="danger" 
              onClick={() => deleteFavs(userId, id)}
            >
              X
            </Button>
          </ListGroup> */}

          <Modal show={showing} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{house_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col>
                    <Row>
                    Address: {address}
                    </Row>
                    <Row>
                    City: {city}
                    </Row>
                    <Row>
                    Avg_candy: {avg_candy}
                    </Row>
                    <Row>
                    Avg_scary: {avg_scary}
                    </Row>
                    <Row>
                      <Button 
                        variant='danger'
                        onClick={() => deleteFavs(userId, id)}
                      >
                        Unfavorite
                      </Button>
                    </Row>
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