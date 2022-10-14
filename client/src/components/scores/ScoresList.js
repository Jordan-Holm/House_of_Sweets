import { Container, Row } from 'react-bootstrap';
import ScoresShow from './ScoresShow';

const ScoresList = ({ scores, userId, houseId }) => (
  <Container>
    <Row>
      { scores.map( s => 
        <ScoresShow 
          key={s.id}
          {...s}
          userId={userId}
          houseId={houseId}
        />
      )}
    </Row>
  </Container>
)

export default ScoresList;