import { Card, Button } from 'react-bootstrap';
const Jordan = ({  Link, id }) => {

        return (
            <>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="https://media.istockphoto.com/photos/orange-picture-id185284489?s=612x612" width='200px' height='200px' />
                    <Card.Body>
                    <Card.Title>Jordan</Card.Title>
                        <Button href="https://github.com/Jordan-Holm">Github</Button>
                       
                      
                        
                    </Card.Body>
                </Card>
            </>
    )
}

export default Jordan