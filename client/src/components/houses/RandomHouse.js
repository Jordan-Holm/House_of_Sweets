import { HouseConsumer } from "../../providers/HouseProvider";
import { useEffect } from "react";
import { Card, Button, Row, Col, Carousel } from 'react-bootstrap';
import { MainP } from '../shared/Style'

const RandomHouse = ({ randomHouse, getRandomHouse }) => {

  useEffect( () => {
    getRandomHouse()
  }, [])

  return (
    <>
      <Carousel>    
        {randomHouse.map( rh =>        
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={rh.img}
              alt="First slide"
              />
            <Carousel.Caption>
              <h3>{rh.house_name}</h3>
              <p>{rh.address}</p>
              <p>{rh.city}</p>
              <p>{rh.scaryAvg}</p>
              <p>{rh.candyAvg}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>
      {/* <Card>
        <Card.Body>

          <Card 
              style={{ width: '20rem', 
              height: '17rem'
              }}
            >
            <Card.Img variant="top" src={randomHouse.findIndex(0).img} width='200px' height='175px' />
            <Card.Body >
                <Row>
                <Col>
                    <Row>
                    <MainP>
                        <b>{randomHouse.findIndex(0).house_name}</b>
                        <br/>
                        <b>{randomHouse.findIndex(0).address}</b>
                        <br/>
                        {randomHouse.findIndex(0).city}
                    </MainP>
                    </Row>
                </Col>
                <Col>
                    <MainP>
                    SR: {randomHouse.findIndex(0).scaryAvg}
                    <br/>
                    CR: {randomHouse.findIndex(0).candyAvg}
                    </MainP>
                </Col>
                </Row>
            </Card.Body>
            </Card>
          <Card 
              style={{ width: '20rem', 
              height: '17rem'
              }}
            >
            <Card.Img variant="top" src={randomHouse.findIndex(1).img} width='200px' height='175px' />
            <Card.Body >
                <Row>
                <Col>
                    <Row>
                    <MainP>
                        <b>{randomHouse.findIndex(1).house_name}</b>
                        <br/>
                        <b>{randomHouse.findIndex(1).address}</b>
                        <br/>
                        {randomHouse.findIndex(1).city}
                    </MainP>
                    </Row>
                </Col>
                <Col>
                    <MainP>
                    SR: {randomHouse.ifindIndex(1).scaryAvg}
                    <br/>
                    CR: {randomHouse.findIndex(1).candyAvg}
                    </MainP>
                </Col>
                </Row>
            </Card.Body>
          </Card>
          <Card 
              style={{ width: '20rem', 
              height: '17rem'
              }}
            >
            <Card.Img variant="top" src={randomHouse.findIndex(2).img} width='200px' height='175px' />
            <Card.Body >
              <Row>
              <Col>
                  <Row>
                  <MainP>
                      <b>{randomHouse.findIndex(2).house_name}</b>
                      <br/>
                      <b>{randomHouse.findIndex(2).address}</b>
                      <br/>
                      {randomHouse.findIndex(2).city}
                  </MainP>
                  </Row>
              </Col>
              <Col>
                  <MainP>
                  SR: {randomHouse.findIndex(2).scaryAvg}
                  <br/>
                  CR: {randomHouse.findIndex(2).candyAvg}
                  </MainP>
              </Col>
              </Row>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card> */}
    </>
  )
}

const ConnectedRandomHouse = (props) => (
  <HouseConsumer>
    { value => <RandomHouse {...props} {...value} />}
  </HouseConsumer>
)

export default ConnectedRandomHouse;