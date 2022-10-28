import { useState } from 'react';
import { Card, Button, Modal, Container, Row, Col, ListGroup, ModalTitle } from 'react-bootstrap';
import { teamCard, ImageStyle, cardTitle, buttonAlign, createdButton, LinkedInButton, GithubButton } from '../Style';
const Eric = ({  Link, id }) => {
    const [show, setShow] = useState(false)
        return (
            <>
                <Card as={teamCard}>
                    <Card.Img 
                        as={ImageStyle}
                        variant="top" 
                        src="https://res.cloudinary.com/dgcjckeym/image/upload/v1666735491/CC3B5CB5-F643-41DA-9CDF-50CC2E69A5B9_tcp5pu.jpg" width='200px' height='200px' 
                    />
                    <Card.Body>
                    <Card.Title as={cardTitle} >Eric</Card.Title>
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
                                                                My Profile Styling
                                                            </li>
                                                            <li>
                                                                Favorites Styling
                                                            </li>
                                                            <li>
                                                                Houses Component
                                                            </li>
                                                            <li>
                                                                House Deatil Page framework
                                                            </li>
                                                            <li>
                                                                Random House functionality and styling
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
                                                                Randomhouse in House Controller
                                                            </li>
                                                            <li>
                                                                Mostly edditing and bug fixing
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
                                        href="https://github.com/PerkinsEric"
                                        as={LinkedInButton}
                                    >
                                        Github
                                    </Button>
                                </Col>
                                <Col as={buttonAlign}>
                                    <Button 
                                        href="www.linkedin.com/in/eric-perkins-777267225/"
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

export default Eric