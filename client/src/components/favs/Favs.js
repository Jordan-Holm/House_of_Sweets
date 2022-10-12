import { useState } from 'react';
//import FavsList from './FavsList';
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
          <FavsForm addFavs={addFavs} setAdd={setAdd} />
        </Modal.Body>
      </Modal>

      <h1>All Favorites</h1>
      <FavsList 
        favs={favs}
      />
    </>
  )
}

const ConnectedFavs = (props) => (
    <FavsConsumer>
      { value => <Favs {...value} {...props} /> }
    </FavsConsumer>
  )
  
  export default ConnectedFavs;