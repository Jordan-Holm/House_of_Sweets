import HouseShow from './HouseShow';
import {Container, Row, Col } from 'react-bootstrap';

const HouseList = ({ houses }) => (
  <Container>
    <Row md='4' sm='12'>
      { houses.map( h => 
        <Col key={h.id}>
          <HouseShow
            {...h}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default HouseList;