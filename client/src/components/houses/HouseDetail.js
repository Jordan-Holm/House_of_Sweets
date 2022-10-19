import { Card, ListGroup, Modal, Button, Container, Row, Col, Image, ToggleButton, Title } from 'react-bootstrap';
import { HouseConsumer } from '../../providers/HouseProvider';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import HouseForm from './HouseForm';
import axios from 'axios';
import { AuthConsumer } from '../../providers/AuthProvider';
import { FavsConsumer } from '../../providers/FavsProvider';
import { ScoreConsumer } from '../../providers/ScoreProvider';
import Scores from '../scores/Scores';
import ScoresForm from '../scores/ScoresForm';

const HouseDetail = ({ id, user, addFavs, deleteHouse, updateHouse, addScore }) => {
    const [showing, setShow] = useState(false)
    const [editing, setEdit] = useState(false)
    const [addingScore, setScoreAdd] = useState(false)

    // const [house, setHouse] = useState({ 
    //     house_name: '',
    //     address: '',
    //     avg_candy: 0,
    //     avg_scary: 0,
    //     city: '',
    //     img: ''
    //   })
    const {houseId} = useParams()
    const location = useLocation()
    const {house_name, address, avg_candy, avg_scary, city, img} = location.state
    //   useEffect( () => {
    //     axios.get(`/api/houses/${id}`)
    //       .then( res => setHouse( res.data ))
    //       .catch( err => console.log(err))
    //   }, [] )

    return (
        <>
            <Container>
                <h1>{house_name}</h1>
            </Container>
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
                            onClick={() => addFavs({ houseId: houseId, userId: user.id })}
                        >
                            Add to Favorites
                        </Button>
                        <Button onClick={ () => setScoreAdd(true)}>
                            Rate
                        </Button>
                        <Modal show={addingScore} onHide={() => setScoreAdd(false)}>
                            <Modal.Header closeButton>
                                <Modal.Body>
                                    <ScoresForm 
                                    addScore={addScore}
                                    houseId={houseId}
                                    setScoreAdd={setScoreAdd}
                                    />
                                </Modal.Body>
                            </Modal.Header>
                        </Modal>

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
                                <HouseForm
                                    updateHouse={updateHouse} 
                                    setEdit={setEdit} 
                                    id={houseId}
                                    house_name={house_name}
                                    address={address}
                                    city={city}
                                    img={img}
                                />
                            </Modal.Body>
                        </Modal>
                        <Button
                            onClick={() => deleteHouse(houseId)}
                        >
                            Delete
                        </Button>
                        </Col>
                </Row>
                <Row>
                    <Scores userId={user.id} houseId={houseId}/>
                </Row>
            </Container>
        </>
    )
}

const ConnectedHouseDetail = (props) => (
    <HouseConsumer>
        { value => <HouseDetail {...props} {...value}/>}
    </HouseConsumer>
)

const ConnectedAuthProvider = (props) =>  (
    <AuthConsumer>
      { value => <ConnectedHouseDetail {...props} {...value} />}
    </AuthConsumer>
)
  
const ConnectedFavoriteProvider = (props) => (
    <FavsConsumer>
      { value => <ConnectedAuthProvider {...props} {...value} />}
    </FavsConsumer>
)

const ConnectedScoresProvider = (props) => (
    <ScoreConsumer>
        { value => < ConnectedFavoriteProvider {...props} {...value} /> }
    </ScoreConsumer>
)
export default ConnectedScoresProvider;
