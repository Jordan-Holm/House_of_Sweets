import { Dropdown } from "react-bootstrap";

const Sort = () => {

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle>
                    Sort
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Header>Candy Rating</Dropdown.Header>
                    <Dropdown.Item eventKey="Best Candy">Best - Worst</Dropdown.Item>
                    <Dropdown.Item eventKey="Worst Candy">Worst - Best</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Scary Rating</Dropdown.Header>
                    <Dropdown.Item eventKey="Best Scary">Best - Worst</Dropdown.Item>
                    <Dropdown.Item eventKey="Worst Scary">Worst - Best</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default Sort;