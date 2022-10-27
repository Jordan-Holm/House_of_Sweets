import { Form, Button, Row, Col } from "react-bootstrap";
import { FilterSpan } from "./Style";
const filterLink = (current, name, setFilter) => {
    return current === name ?
        <span 
        as={FilterSpan}
        key={name}
        >
            {name}&nbsp;
        </span>
    :
    <span 
        as={FilterSpan}
        onClick={() => setFilter(name)}
        key={name}
    >
        {name}&nbsp;
    </span>
}

const Filter = ({ filter, setFilter }) => {


    return (
        <>
            { ['All', 'Provo', 'Lehi', 'Salt Lake City'].map( f => filterLink(filter, f, setFilter))}
            {/* <Form>
                <Row>
                    <Col>
                        <Form.Select size="md">
                            <option color="gray">City</option>
                            <option value="Provo">Provo</option>
                            <option value="Lehi">Lehi</option>
                            <option value="Salt Lake City">Salt Lake City</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Button onSubmit={handleSubmit}>
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form> */}
        </>
    )
}

export default Filter;