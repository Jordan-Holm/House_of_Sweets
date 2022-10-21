import { Container, Row, Col } from "react-bootstrap";
import Filter from "../Filter";
import Sort from "../Sort";

import { HouseConsumer } from "../../../providers/HouseProvider";
import { useState } from "react";

const FilteredHouses = (houses) => {
    const [filterHouses, setHouses] = useState([houses])
    const [filter, setFilter] = useState('All')
    
    return (
        <Container>
            <Row> 
                <Col>
                    <Filter />
                </Col>
                <Col>
                    <Sort />
                </Col>
            </Row>
        </Container>
    )
}

const ConnectedHouses = (props) => (
    <HouseConsumer>
        { value => <FilteredHouses {...props} {...value} />}
    </HouseConsumer>
)

export default ConnectedHouses;