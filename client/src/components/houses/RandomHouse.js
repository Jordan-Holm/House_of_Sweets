import { HouseConsumer } from "../../providers/HouseProvider";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Card, Button, Row, Col, Carousel, Container } from 'react-bootstrap';
import { MainP } from '../shared/Style'

const RandomHouse = ({ id, randomHouse, getRandomHouse }) => {

  useEffect( () => {
    getRandomHouse()
  }, [])

  return (
    <>
      <Carousel>    
        {randomHouse.map( rh =>    
        <Carousel.Item>
          <Link 
            key={rh.id}
            to={`/houses/${rh.id}`}
            state={{
              address: rh.address,
              city: rh.city,
              img: rh.img,
              house_name: rh.house_name,
              avg_candy: rh.avg_candy,
              avg_scary: rh.avg_scary,
              }}
            >   
            <Container>
              <img
                className="d-block mx-auto image-fluidcfrdsew34 w-50"
                src={rh.img}
                alt="First slide"
              />
            </Container>
            <Carousel.Caption>
              <Container className='houseBody houseClear'>
                <h3>{rh.house_name}</h3>
                <p>{rh.address}</p>
                <p>{rh.city}</p>
                <p>{rh.scaryAvg}</p>
                <p>{rh.candyAvg}</p>
              </Container>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        )}
      </Carousel>          
    </>
  )
}

const ConnectedRandomHouse = (props) => (
  <HouseConsumer>
    { value => <RandomHouse {...props} {...value} />}
  </HouseConsumer>
)

export default ConnectedRandomHouse;