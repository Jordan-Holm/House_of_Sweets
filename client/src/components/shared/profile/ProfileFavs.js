import Favs from "../../favs/Favs";
import { Navbar, Nav, Button, Container, Tooltip, OverlayTrigger, Image, Col, Row, Card } from "react-bootstrap";

const ProfileFavs = () => {

    return (
        <>
            <Card style={{width: '65rem', 
                height: '20rem', 
                top: '1rem',
                marginLeft: 'auto',
                marginRight: 'auto' 
                }}>
                <Card.Header>Favorites</Card.Header>
                <Favs />
            </Card>
        </>
    )
}

export default ProfileFavs;