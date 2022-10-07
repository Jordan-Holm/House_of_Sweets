import { useState } from 'react';
import HouseList from './HouseList';
import HouseForm from './HouseForm';
import { Modal, Button } from 'react-bootstrap';
import { HouseConsumer } from '../../providers/HouseProvider';

const Houses = ({ addHouse, houses }) => {
  const [adding, setAdd] = useState(false)

  return (
    <>
      <Button onClick={() => setAdd(true)}>
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

      <h1>All Houses</h1>
      <HouseList 
        houses={houses}
      />
    </>
  )
}

const ConnectedHouses = (props) => (
    <HouseConsumer>
      { value => <Houses {...value} {...props} /> }
    </HouseConsumer>
  )
  
  export default ConnectedHouses;