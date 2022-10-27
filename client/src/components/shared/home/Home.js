import { Card, ListGroup, Modal, Button, Container, Row, Col, Image, ToggleButton, Title } from 'react-bootstrap';
import FilteredHouses from "./FilteredHouse";
import HomeHeader from "./HomeHeader";
import ConnectedRandomHouse from '../../houses/RandomHouse';

const Home = () => (
    <>
        <HomeHeader />
        <FilteredHouses />
        <ConnectedRandomHouse/>
    </>
)

export default Home;