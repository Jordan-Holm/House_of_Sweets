import { useEffect, useState } from 'react';
import HouseList from './HouseList';
import HouseForm from './HouseForm';
import { Modal, Button, Row, Container, Col, Pagination } from 'react-bootstrap';
import { HouseConsumer } from '../../providers/HouseProvider';
import Filter from '../shared/Filter';
import { houseCardContainer, filterRow, addButton, addButtonColor } from '../shared/Style';
import { paginationStyle } from '../shared/Style';

const Houses = ({ addHouse, houses, getAllHouses, pagination }) => {
  const [adding, setAdd] = useState(false)
  // const [filterHouses, setHouses] = useState([houses])
  const [filter, setFilter] = useState('All')
  const [pages, setPages] = useState([])
  const [active, setActive] = useState(1)

  useEffect( () => {
    getAllHouses()
    renderPages()
  }, [])

  const renderPages = () => {
    let items = [];
    for (let num = 1; num <= pagination; num ++) {
      items.push(
        <Pagination.Item 
          key={num} 
          active={num === active}
          onClick={ () => {
            getAllHouses(num)
          }}
        >
          {num}
        </Pagination.Item>
      )
    }
    setPages(items)
  }

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
          <Row>
            <Pagination 
              className='d-flex justify-content-center'
            >
              {pages}
            </Pagination>
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