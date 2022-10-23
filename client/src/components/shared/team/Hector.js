import { Card, Button } from 'react-bootstrap';
const Hector = ({  Link, id }) => {

        return (
            <>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?s=612x612" width='200px' height='200px' />
                    <Card.Body>
                    <Card.Title>Hector</Card.Title>
                        <Button href="https://github.com/Hectorgz25">Github</Button>
                       
                      
                        
                    </Card.Body>
                </Card>
            </>
    )
}

export default Hector