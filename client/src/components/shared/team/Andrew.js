import { Card, Button } from 'react-bootstrap';
const Andrew = ({  Link, id }) => {

        return (
            <>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="https://media.istockphoto.com/photos/banana-picture-id1291262112?s=612x612" width='200px' height='200px' />
                    <Card.Body>
                    <Card.Title>Andrew Gaertner</Card.Title>
                        <Button href="https://github.com/AJGcodes">Github</Button>
                       
                      
                        
                    </Card.Body>
                </Card>
            </>
    )
}

export default Andrew