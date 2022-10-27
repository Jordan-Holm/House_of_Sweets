import { Card, ListGroup, Modal, Button, Container, Row, Col, Image, ToggleButton, Title } from 'react-bootstrap';
import HomeHeader from "./HomeHeader";
import ConnectedRandomHouse from '../../houses/RandomHouse';

const Home = () => (
    <>
        <HomeHeader />
        <ConnectedRandomHouse/>
    </>
)

export default Home;