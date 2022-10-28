import { useState } from 'react';
import { Card, Button, Modal, Container, Row, Col, ListGroup, ModalTitle } from 'react-bootstrap';
import HectorImg from './Hector.jpg';
import { teamCard, ImageStyle, cardTitle, buttonAlign, createdButton,
    LinkedInButton, GithubButton
} from '../Style';

const Jordan = ({  Link, id }) => {
    const [show, setShow] = useState(false)
        return (
            <>
                <Card 
                    as={teamCard}
                >
                    <Card.Img 
                        as={ImageStyle}
                        variant="top" 
                        src={HectorImg} 
                        />
                    <Card.Body>
                        <Card.Title as={cardTitle}>Hector</Card.Title>
                        <Container>
                            <Row>
                                <Col as={buttonAlign}>
                                    <Button 
                                        onClick={ () => setShow(true)}
                                        as={createdButton}
                                    >
                                        What I Created
                                    </Button>
                                </Col>
                            </Row>
                            <Modal
                                show={show}
                                onHide={ () => setShow(false)}
                                >
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        My Work
                                    </Modal.Title>
                                </Modal.Header>
                                    <Modal.Body>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <h4>
                                                        Front-End
                                                    </h4>
                                                    <Row>
                                                        <ol>
                                                            <li>
                                                                House Page & Features
                                                            </li>
                                                            <li>
                                                                Rating 
                                                            </li>
                                                            <li>
                                                                Register Page
                                                            </li>
                                                            <li>
                                                                Register Page Styling
                                                            </li>
                                                            <li>
                                                                Team Card
                                                            </li>
                                                        </ol>
                                                    </Row>
                                                </Col>
                                                <Col>
                                                    <h4>
                                                        Back-End
                                                    </h4>
                                                    <Row>
                                                        <ol>
                                                            <li>
                                                                Favorite Controller
                                                            </li>
                                                            
                                                        </ol>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant='secondary'
                                            onClick={ () => setShow(false)}
                                            >
                                            Close
                                        </Button>
                                    </Modal.Footer>
                            </Modal>
                        </Container>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col as={buttonAlign}>
                                <GithubButton 
                                    href="https://www.github.com/Hectorgz25"
                                    
                                >
                                    Github
                                </GithubButton>
                            </Col>
                            <Col as={buttonAlign}>
                                <LinkedInButton 
                                    href="https://www.linkedin.com/in/hectorgonzalez2525/"
                                    as={LinkedInButton}
                                >
                                    LinkedIn
                                </LinkedInButton>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </>
    )
}

export default Jordan