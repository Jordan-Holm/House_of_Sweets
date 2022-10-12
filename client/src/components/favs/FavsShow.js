import { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FavsConsumer } from '../../providers/FavsProvider';

const FavsShow = ({ id, house_id, user_id, }) => {
  const [house, setHouse] = useState({})
  const { userId } = useParams()

  useEffect( () => {
    axios.get(`/api/houses/${house_id}`)
      .then( res => setUser( res.data ))
      .catch( err => console.log(err))
  }, [])

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

const ConnectedFavsShow = (props) => (
  <FavsConsumer>
    { value => <FavsShow {...value} {...props} />}
  </FavsConsumer>
)

export default ConnectedFavsShow;