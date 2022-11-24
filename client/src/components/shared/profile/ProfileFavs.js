import Favs from "../../favs/Favs";
import { Card } from "react-bootstrap";
import './ProfileStyle.css'

const ProfileFavs = () => {

    return (
        <>
            <Card style={{
                borderColor: "#CC5803",
                top: '1rem',
                marginLeft: 'auto',
                marginRight: 'auto' 
                }}>
                <Card.Body className='profileBody'>  
                    <Card.Title>Favorites</Card.Title>
                    <Favs />
                </Card.Body>
            </Card>
        </>
    )
}

export default ProfileFavs;