import TeamsHeader from './TeamsHeader';
import Jordan from './Jordan';
import Hector from './Hector';
import Eric from './Eric';
import Andrew from './Andrew';
import { Container } from 'react-bootstrap';

const Teams = () => (
    <>
        <Container>
            <TeamsHeader />
            <Jordan />
            <Hector />
            <Eric />
            <Andrew />
        </Container>
    </>
)


export default Teams