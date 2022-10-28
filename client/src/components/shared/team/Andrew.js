// import { Card, Button } from 'react-bootstrap';
// const Andrew = ({  Link, id }) => {

//         return (
//             <>
//                 <Card style={{ width: '12rem' }}>
//                     <Card.Img variant="top" src="https://media.istockphoto.com/photos/banana-picture-id1291262112?s=612x612" width='200px' height='200px' />
//                     <Card.Body>
//                     <Card.Title>Andrew Gaertner</Card.Title>
//                         <Button href="https://github.com/AJGcodes">Github</Button>
                       
                      
                        
//                     </Card.Body>
//                 </Card>
//             </>
//     )
// }

// export default Andrew

import { useState } from 'react';
import { Card, Button, Modal, Container, Row, Col, ListGroup, ModalTitle } from 'react-bootstrap';
import AndrewImg from './Andrew.jpg';
import { teamCard, ImageStyle, cardTitle, buttonAlign, createdButton, GithubButton, LinkedInButton
} from '../Style';

const Andrew = ({  Link, id }) => {
    const [show, setShow] = useState(false)
        return (
            <>
                <Card 
                    as={teamCard}
                >
                    <Card.Img 
                        as={ImageStyle}
                        variant="top" 
                        src={AndrewImg} 
                        />
                    <Card.Body>
                        <Card.Title as={cardTitle}>Andrew</Card.Title>
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
                                                                Rating
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
                                                                House Model
                                                            </li>
                                                            <li>
                                                                Score Model
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
                                    href="https://github.com/AJGcodes"

                                >
                                    Github
                                </GithubButton>
                            </Col>
                            <Col as={buttonAlign}>
                                <LinkedInButton
                                    href=""

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

export default Andrew