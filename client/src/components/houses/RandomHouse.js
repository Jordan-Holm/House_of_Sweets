import { HouseConsumer } from "../../providers/HouseProvider";
import { useEffect } from "react";
import { Card, Button, Row, Col } from 'react-bootstrap';
import { MainP } from '../shared/Style'

const RandomHouse = ({ randomHouse, getRandomHouse }) => {

  useEffect( () => {
    getRandomHouse()
  }, [])

  return (
    <>
        <Card 
            style={{ width: '20rem', 
            height: '17rem'
            }}
        >
        <Card.Img variant="top" src={randomHouse.img} width='200px' height='175px' />
        <Card.Body >
            <Row>
            <Col>
                <Row>
                <MainP>
                    <b>{randomHouse.house_name}</b>
                    <br/>
                    <b>{randomHouse.address}</b>
                    <br/>
                    {randomHouse.city}
                </MainP>
                </Row>
            </Col>
            <Col>
                <MainP>
                SR: {randomHouse.scaryAvg}
                <br/>
                CR: {randomHouse.candyAvg}
                </MainP>
            </Col>
            </Row>
        </Card.Body>
        </Card>
    </>
  )
}

const ConnectedRandomHouse = (props) => (
  <HouseConsumer>
    { value => <RandomHouse {...props} {...value} />}
  </HouseConsumer>
)

export default ConnectedRandomHouse;