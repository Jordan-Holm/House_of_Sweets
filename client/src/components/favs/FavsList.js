import { Container, ListGroup, Row } from 'react-bootstrap';
import FavsShow from './FavsShow';

const FavList = ({ favorites, userId }) => (
  <Container>
    <Row>
      { favorites.map( f => 
        <FavsShow 
          key={f.id}
          {...f}
          userId={userId}
        />
      )}
    </Row>
  </Container>
)

export default FavList;