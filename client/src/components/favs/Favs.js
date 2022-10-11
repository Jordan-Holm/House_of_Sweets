import { useState } from 'react';
//import FavsList from './FavsList';
//import FavsForm from './FavsForm';
import { Modal, Button } from 'react-bootstrap';
import { FavsConsumer } from '../../providers/FavsProvider';

const Favs = ({ addFavs, favs }) => {
  const [adding, setAdd] = useState(false)

  return (
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Favorite</Modal.Title>
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