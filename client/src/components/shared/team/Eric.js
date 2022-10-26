import { Card, Button } from 'react-bootstrap';
const Eric = ({  Link, id }) => {

        return (
            <>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dgcjckeym/image/upload/v1666735491/CC3B5CB5-F643-41DA-9CDF-50CC2E69A5B9_tcp5pu.jpg" width='200px' height='200px' />
                    <Card.Body>
                    <Card.Title>Eric</Card.Title>
                        <Button href="https://github.com/PerkinsEric">Github</Button>
                       
                      
                        
                    </Card.Body>
                </Card>
            </>
    )
}

export default Eric