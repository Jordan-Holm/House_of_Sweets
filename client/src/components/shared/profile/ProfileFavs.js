import Favs from "../../favs/Favs";
import { Navbar, Nav, Button, Container, Tooltip, OverlayTrigger, Image, Col, Row, Card } from "react-bootstrap";

const ProfileFavs = () => {

    return (
        <>
            <Card style={{width: '65rem', height: '18rem'}}>
                <Favs />
            </Card>
        </>
    )
}

export default ProfileFavs;