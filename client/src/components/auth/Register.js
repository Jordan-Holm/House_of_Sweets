import { AuthConsumer } from "../../providers/AuthProvider";
import { useState } from "react";
import Flash from "../shared/Flash";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ghostImg from './login/White & Orange Simple Hand Drawn Ghost Character Halloween Logo (1).png'


import { imageContainer, imageObject, imageTextRowRegister, registerBody,
    registerShow, registerForm, registerName, registerOrigin, registerEmail, registerPassword, agreementPolicy,
    registerButton, login 
} from "../shared/Style";


const Register = ({ handleRegister, errors, setErrors }) => {
    const [user, setUser] = useState({name: '', nickname: '', email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        handleRegister(user)
    }

    return (
        <>
            <Row>
                <Col>
                    <Row as={imageObject}>
                        <Image 
                            src={ghostImg}
                            alt="Ghost Image"
                        />
                    </Row>
                    <Row as={imageTextRowRegister}>
                        <h1>
                            Find the sweetest home in the neighborhood
                        </h1>
                    </Row>
                </Col>
                <Col as={registerBody}>
                    <Row as={registerShow}>
                        <p>
                            register
                        </p>
                    </Row>
                    <Container
                        as={registerForm}
                    >
                        { errors ?
                            <Flash 
                                variant={errors.variant}
                                msg={errors.msg}
                                setErrors={setErrors}
                            />
                        : null
                        }
                        <Row>
                            <Col>
                                <h2>
                                    Create your Free Account 
                                </h2>
                                <h5>
                                    Submit your data for register
                                </h5>
                            </Col>
                            <Col />
                        </Row>
                        <Row>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={registerName}>
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control 
                                        name="name"
                                        value={user.name}
                                        onChange={ (e) => setUser({ ...user, name: e.target.value })}
                                        required
                                        placeholder="Name"
                                    />
                                </Form.Group>
                                <Form.Group as={registerOrigin}>
                                    <Form.Label>Your User Name</Form.Label>
                                    <Form.Control 
                                        name="nickname"
                                        value={user.nickname}
                                        onChange={ (e) => setUser({ ...user, nickname: e.target.value })}
                                        required
                                        placeholder="User"
                                    />
                                </Form.Group>
                                <Form.Group as={registerEmail}>
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control 
                                        type="email"
                                        name="email"
                                        value={user.email}
                                        onChange={ (e) => setUser({ ...user, email: e.target.value })}
                                        required
                                        placeholder="Email"
                                    />
                                </Form.Group>
                                <Form.Group as={registerPassword}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password"
                                        name="password"
                                        value={user.password}
                                        onChange={ (e) => setUser({ ...user, password: e.target.value })}
                                        required
                                        placeholder="Password"
                                    />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group as={agreementPolicy}>
                                            <Form.Check 
                                                type="checkbox"
                                                label="I agree to Sewo Security and Privacy Policy "
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button 
                                        as={registerButton}
                                        type="submit"
                                        // variant=""
                                    >
                                        Get Started
                                    </Button>
                                </Row>
                            </Form>
                        </Row>
                    </Container>
                    <Row as={login}>
                        <p>
                            I have an account?&nbsp;
                            <Link to="/login">
                                Login
                            </Link>
                        </p>
                    </Row>
                    
                </Col>
            </Row>
        </>
    )
}


const ConnectedRegister = (props) => (
    <AuthConsumer>
        { value => <Register {...props} {...value} />}
    </AuthConsumer>
)

export default ConnectedRegister;