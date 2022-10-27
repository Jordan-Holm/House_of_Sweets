import { Container, Row, Col, Button } from "react-bootstrap";



const TeamsHeader = () => (
    <Container>
        <Row>
            <h1>Meet Our Team</h1>
        </Row>
        <Row>
            <Col>
                <Button
                    href="https://github.com/Jordan-Holm/House_of_Sweets"
                    style={{ 
                        backgroundColor: "#833FFF",
                        borderColor: "#833FFF",
                        margin: "1%"
                    }}
                >
                    Source Code
                </Button>
            </Col>
        </Row>

    </Container>
)


export default TeamsHeader;