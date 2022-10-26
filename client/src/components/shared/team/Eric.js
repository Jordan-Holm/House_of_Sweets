import { useState } from 'react';
import { Card, Button, Modal, Container, Row, Col, ListGroup, ModalTitle } from 'react-bootstrap';

const Eric = ({  Link, id }) => {
    const [show, setShow] = useState(false)
        return (
            <>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dgcjckeym/image/upload/v1666735491/CC3B5CB5-F643-41DA-9CDF-50CC2E69A5B9_tcp5pu.jpg" width='200px' height='200px' />
                    <Card.Body>
                    <Card.Title>Eric</Card.Title>
                        <Button href="https://github.com/PerkinsEric">Github</Button>
                        <Container>
                            <Row>
                                <Col className='buttonAlign'>
                                    <Button 
                                        onClick={ () => setShow(true)}
                                        className="createdButton"
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
                                                        </ol>
                                                    </Row>
                                                </Col>
                                                <Col>
                                                    <h4>
                                                        Back-End
                                                    </h4>
                                                    <Row>
                                                        <ol>
                                                            Mostly edditing and bug fixing
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
                        <Card.Footer>
                        <Row>
                            <Col className='buttonAlign'>
                            <Button 
                                href="https://github.com/PerkinsEric"
                                className='githubButton'
                            >
                                Github
                            </Button>
                            </Col>
                            <Col className='buttonAlign'>
                                <Button 
                                    href="www.linkedin.com/in/eric-perkins-777267225/"
                                    className='LinkedInButton'
                                >
                                    LinkedIn
                                </Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                        
                    </Card.Body>
                </Card>
            </>
    )
}

export default Eric