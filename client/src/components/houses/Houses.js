import { useEffect, useState } from 'react';
import HouseList from './HouseList';
import HouseForm from './HouseForm';
import { Modal, Button, Row, Container, Col } from 'react-bootstrap';
import { HouseConsumer } from '../../providers/HouseProvider';
import Filter from '../shared/Filter';
import Sort from '../shared/Sort';
import { houseCardContainer, filterRow, addButton, addButtonColor } from '../shared/Style';

const Houses = ({ addHouse, houses, getAllHouses }) => {
  const [adding, setAdd] = useState(false)
  // const [filterHouses, setHouses] = useState([houses])
  const [filter, setFilter] = useState('All')

  useEffect( () => {
    getAllHouses()
  }, [])

  const visibleHouses = () => {
    switch(filter) {
      case 'Provo':
        return houses.filter( h => h.city === "Provo" )
      case 'Lehi':
        return houses.filter( h => h.city === "Lehi" )
      case 'Salt Lake City':
        return houses.filter( h => h.city === "Salt Lake City" )
      default:
        return houses
    }
  }
  
  return (
    <Container>   
      <Row>
        <h1>All Houses</h1>
      </Row>

        <Container as={houseCardContainer}>
          <Row as={filterRow}>
            <Col>
              <Filter 
                filter={filter}
                setFilter={setFilter}
              />
            </Col>
            <Col as={addButton}>
              <Button 
                onClick={() => setAdd(true)}
                as={addButtonColor}
              >
                +
              </Button>
              <Modal show={adding} onHide={() => setAdd(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Add House</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <HouseForm addHouse={addHouse} setAdd={setAdd} />
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
          <Row>
            <HouseList 
              houses={visibleHouses()}
            />
          </Row>
        </Container>
    </Container>
  )
}

const ConnectedHouses = (props) => (
    <HouseConsumer>
      { value => <Houses {...props} {...value} /> }
    </HouseConsumer>
  )
  
  export default ConnectedHouses;