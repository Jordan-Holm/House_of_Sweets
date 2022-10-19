import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import {ScoreConsumer} from '../../providers/ScoreProvider';

const ScoresForm = ({addScore, updateScore, id, houseId, candy, scary, comment, setScoreAdd, setScoreEdit}) => { 
    const [score, setScore] = useState({candy: 1, scary: 1, comment: ''})
    
    useEffect( () => {
        if (id) {
            setScore({ candy, scary, comment})
        }
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(id) {
            updateScore(houseId, id, score)
            setScoreEdit(false)
        } else {
            addScore(houseId, score)
            setScoreAdd(false)
        }
        setScore({candy: 0, scary: 0, comment: ''})
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>
                        Candy
                    </Form.Label>
                    <Form.Select 
                        aria-label='Default select example'
                        name="candy"
                        value={score.candy}
                        onChange={(e) => setScore({...score, candy: e.target.value})}
                        required
                    >
                        <option value={1}>
                            1
                        </option>
                        <option value={2}>
                            2
                        </option>
                        <option value={3}>
                            3
                        </option>
                        <option value={4}>
                            4
                        </option>
                        <option value={5}>
                            5
                        </option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>
                        Scary
                    </Form.Label>
                    <Form.Select 
                        aria-label='Default select example'
                        name="scary"
                        value={score.scary}
                        onChange={(e) => setScore({...score, scary: e.target.value})}
                        required
                    >
                        <option value={1}>
                            1
                        </option>
                        <option value={2}>
                            2
                        </option>
                        <option value={3}>
                            3
                        </option>
                        <option value={4}>
                            4
                        </option>
                        <option value={5}>
                            5
                        </option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>
                        Comment
                    </Form.Label>
                    <Form.Control 
                        as="textarea"
                        rows={3}
                        name="comment"
                        value={score.comment}
                        onChange={(e) => setScore({...score, comment: e.target.value})}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )

}


const ConnectedScoresForm = (props) => (
    <ScoreConsumer>
      { value => <ScoresForm {...props} {...value} />}
    </ScoreConsumer>
)

export default ConnectedScoresForm;