import { Card, ListGroup, Modal, Button, Container, Row, Col, Image, ToggleButton, Title } from 'react-bootstrap';
import { HouseConsumer } from '../../providers/HouseProvider';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HouseForm from './HouseForm';
import axios from 'axios';
import { AuthConsumer } from '../../providers/AuthProvider';
import { FavsConsumer } from '../../providers/FavsProvider';

const HouseDetail = ({ id, user, addFavs,  house_name, address, city, img, avg_candy, avg_scary, deleteHouse, updateHouse }) => {
    const [showing, setShow] = useState(false)
    const [editing, setEdit] = useState(false)

    return (
        <>
            <header>
                
                <title>{house_name}</title>
            </header>
            <body>
                <Container>
                    <Row>
                        <Col>
                            <Image src={img} width='450px' height='250px' 
                            style = {{
                            position: 'relative'
                            }}
                            />
                        </Col>
                        <Col>
                            <Row>
                                <Image src={img} width='200px' height='125px' 
                                style = {{
                                position: 'relative'
                                }}
                                />  
                            </Row>
                            <Row>
                            <Image src={img} width='200px' height='125px' 
                                style = {{
                                position: 'relative'
                                }}
                                />  
                            </Row>
                        
                        </Col>
                        <Col>
                            <Image src={img} width='250px' height='250px' 
                                style = {{
                                position: 'relative'
                                }}
                                />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Address: {address}
                            <br />
                            City: {city}
                            <br />
                            Avg_candy: {avg_candy}
                            <br />
                            Avg_scary: {avg_scary}
                            <br/>
                            <Button
                            onClick={() => addFavs({ houseId: id, userId: user.id })}
                            >
                                Add to Favorites
                            </Button>
                            <Button>Rate</Button>
                            <Button 
                                onClick={() => setEdit(true)}
                            >
                                Edit
                            </Button>

                            <Modal show={editing} onHide={() => setEdit(false)}>
                                <Modal.Header closeButton>
                                <Modal.Title>Update House</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div  
                                        style = {{
                                        postion: 'relative',
                                        }}>
                                        <HouseForm
                                        updateHouse={updateHouse} 
                                        setEdit={setEdit} 
                                        id={id}
                                        house_name={house_name}
                                        address={address}
                                        city={city}
                                        img={img}
                                        />
                                    </div>
                                </Modal.Body>
                            </Modal>
                            <Button
                            onClick={() => deleteHouse(id)}
                            >
                            Delete
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </body>
        </>
    )
}

export default HouseDetail