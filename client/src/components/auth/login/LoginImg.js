import { Container, Col, Row, Image } from "react-bootstrap";


const LoginImg = () => (
    <>
        <style type="text/css">
            {`
            .imageContainer  {
                align-content: center;
                background-color: #000000;
            }

            .imageObject {
                border-radius: 5% 10% 25% 10%;
                padding: 0%;
                margin: -15% 5% -5% -5%;
                scale: 50%;
            }

            .imageText {
                font-family: "Urbanist";
                color: #FF7F11;
                margin: -15% 5% 10% 5%;
            }
        `}
        </style>
        <Container
            className="imageContainer"
        >
            <Row>
                <Image 
                    className="imageObject"
                    src="https://images.unsplash.com/photo-1633380170808-9404cd630e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                    alt="Ghost Image"
                />
            </Row>
            <Row>
                <h1
                    className="imageText"
                >
                    Find the sweetest home in the neighborhood
                </h1>
            </Row>
        </Container>
    </>
)

export default LoginImg;