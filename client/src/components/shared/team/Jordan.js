import { useState } from 'react';
import { Card, Button, Modal, Container, Row, Col, ListGroup, ModalTitle } from 'react-bootstrap';
import JordanImg from './Jordan.jpg';
import { teamCard, ImageStyle, cardTitle, buttonAlign, createdButton,
    LinkedInButton, githubButton
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
                        src={JordanImg} 
                        />
                    <Card.Body>
                        <Card.Title as={cardTitle}>Jordan</Card.Title>
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
                                                                Favorite Display
                                                            </li>
                                                            <li>
                                                                Rating & Commenting
                                                            </li>
                                                            <li>
                                                                Login & Register Page
                                                            </li>
                                                            <li>
                                                                Login Page Styling
                                                            </li>
                                                            <li>
                                                                Team Card Styling
                                                            </li>
                                                            <li>
                                                                NavBar Styling
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
                                                                Favorite Model
                                                            </li>
                                                            <li>
                                                                User Model (Devise)
                                                            </li>
                                                            <li>
                                                                Application Controller (Devise)
                                                            </li>
                                                            <li>
                                                                House Model
                                                            </li>
                                                            <li>
                                                                Cloudinary for Houses
                                                            </li>
                                                            <li>
                                                                Score Model & Controller
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
                                <Button 
                                    href="https://github.com/Jordan-Holm"
                                    as={githubButton}
                                >
                                    Github
                                </Button>
                            </Col>
                            <Col as={buttonAlign}>
                                <Button 
                                    href="https://www.linkedin.com/in/jordanleeholm/"
                                    as={LinkedInButton}
                                >
                                    LinkedIn
                                </Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </>
    )
}

export default Jordan