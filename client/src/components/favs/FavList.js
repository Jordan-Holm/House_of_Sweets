import { Container, ListGroup } from 'react-bootstrap';
import FavsShow from './FavsShow';

const FavList = ({ favs }) => (
  <Container>
    <ListGroup variant="flush">
      { favs.map( f => 
        <FavsShow 
          key={f.id}
          {...f}
        />
      )}
    </ListGroup>
  </Container>
)

export default FavList;