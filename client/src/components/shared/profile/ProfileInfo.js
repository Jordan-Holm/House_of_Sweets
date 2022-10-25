import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthConsumer } from "../../../providers/AuthProvider";
import { Navbar, Nav, Button, Container, Tooltip, OverlayTrigger, Modal, ListGroup, Image, Col, Row, Card, Dropdown } from "react-bootstrap";
import ConnectedRegister from '../../auth/Register';
import './ProfileStyle.css'

// email, name, username, password
const ProfileInfo = ({ id, user, email, name, username, password, updateUser}) => {
    const [editing, setUserEdit] = useState(false)
    return (
        <>
            <Card style={{
                width: '65rem', 
                height: '18rem',
                marginLeft: 'auto',
                marginRight: 'auto' 
                }}
                className='profileBody'
                >
                <Card.Body className='profileBody'>
                    <Card.Title>
                        <Dropdown>
                            <Dropdown.Toggle>
                                ...
                            </Dropdown.Toggle>
                            <Dropdown.Menu size="sm" title=""> 
                                <Dropdown.Item onClick={ () => setUserEdit(true) }>
                                    Edit Profile
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Title>
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
                </Card.Body>
            </Card>

            <Modal show={editing} onHide={() => setUserEdit(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ConnectedRegister 
                        updateUser={updateUser} 
                        setUserEdit={setUserEdit} 
                        id={id}
                        email={email}
                        name={name}
                        username={username}
                        password={password}
                    />
                </Modal.Body>
            </Modal>
                
        </>
    )
}

const ConnectedProfileInfo = (props) => (
    <AuthConsumer>
      { value => <ProfileInfo { ...props } { ...value } />}
    </AuthConsumer>
)

export default ConnectedProfileInfo