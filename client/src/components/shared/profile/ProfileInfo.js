import { AuthConsumer } from "../../../providers/AuthProvider";
import { Navbar, Nav, Button, Container, Tooltip, OverlayTrigger, Image, Col, Row, Card } from "react-bootstrap";

const ProfileInfo = ({user}) => (
    <Card style={{width: '65rem', height: '18rem'}}>
        <Row>
            <Col> 
                <Image
                    roundedCircle
                    width="200px"
                    height="200px"
                    src={user.image}
                />
            </Col>
            <Col>
                    <h1>{user.nickname}</h1>
            </Col>
        </Row>
    </Card>
)

const ConnectedProfileInfo = (props) => (
    <AuthConsumer>
      { value => <ProfileInfo { ...props } { ...value } />}
    </AuthConsumer>
)

export default ConnectedProfileInfo