import { Card, Button } from 'react-bootstrap';
const Eric = ({  Link, id }) => {

        return (
            <>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="https://media.istockphoto.com/photos/purple-grape-isolated-on-white-background-clipping-path-full-depth-of-picture-id1295773461?s=612x612" width='200px' height='200px' />
                    <Card.Body>
                    <Card.Title>Eric</Card.Title>
                        <Button href="https://github.com/PerkinsEric">Github</Button>
                       
                      
                        
                    </Card.Body>
                </Card>
            </>
    )
}

export default Eric