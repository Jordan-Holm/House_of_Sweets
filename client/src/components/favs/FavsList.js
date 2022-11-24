import { Container, ListGroup, Row } from 'react-bootstrap';
import FavsShow from './FavsShow';

const FavList = ({ favorites, userId }) => (
  <Container>
    <Row xl="4" lg="4" md="3" sm="2" xs="2">
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