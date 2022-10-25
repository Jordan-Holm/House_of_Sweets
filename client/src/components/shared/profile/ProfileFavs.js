import Favs from "../../favs/Favs";
import { Navbar, Nav, Button, Container, Tooltip, OverlayTrigger, Image, Col, Row, Card } from "react-bootstrap";

const ProfileFavs = () => {

    return (
        <>
            <Card style={{width: '65rem', 
                height: '18rem', 
                top: '3rem',
                marginLeft: 'auto',
                marginRight: 'auto' 
                }}>
                <Favs />
            </Card>
        </>
    )
}

export default ProfileFavs;