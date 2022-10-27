import TeamsHeader from './TeamsHeader';
import Jordan from './Jordan';
import Hector from './Hector';
import Eric from './Eric';
import Andrew from './Andrew';
import { Container,Row, Col } from 'react-bootstrap';

const Teams = () => (
    <>
        <Container>
            <TeamsHeader />
            <Row>
                <Col>
                    <Jordan />
                </Col>
                <Col>
                    <Hector />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Eric />
                </Col>
                <Col>
                    <Andrew />
                </Col>
            </Row>
        </Container>
    </>
)


export default Teams