import { AuthConsumer } from "../../../providers/AuthProvider";
import { useState } from "react";
import Flash from "../../shared/Flash";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import ghostImg from './White & Orange Simple Hand Drawn Ghost Character Halloween Logo (1).png'

const Login = ({ handleLogin, errors, setErrors }) => {
    const [user, setUser] = useState({ email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(user)
    }

    const imageContainer = styled.div `
        background-color: #cc5803;
    `
    const imageObject = styled.image `
        padding: 0%;
        margin: -0% 0% 0% 0%;
        scale: 85%;
    `

    const imageTextRow = styled.div `
        margin: -10% 5% 10% 5%;
        color: #000000;
    `

    const loginBody = styled.div `
        background-color: white;
        color: black;
    `

    const loginShow = styled.div `
        text-align: right;
        padding-right: 5%;
    `

    const loginForm = styled.div `
        width: 90%;
        padding: 10% 10% 10% 10%;
        border-radius: 2%;
    `

    const loginEmail = styled.div `
        padding: 5% 0% 5% 0%;
    `
    
    const loginPassword = styled.div `
        padding-bottom: 5%;
    `

    const loginRemember = styled.div `
        padding-bottom: 15%;
    `
    const loginButton = styled.div `
        background-color: blueviolet;
        border-color: blueviolet;
    `

    const register = styled.div `
        text-align: center;
    `
    return (
        <>
            <Row>
                <Col as={imageContainer}>
                    <Row as={imageObject}>
                        <Image 
                            src={ghostImg}
                            alt="Ghost Image"
                        />
                    </Row>
                    <Row as={imageTextRow}>
                        <h1>
                            Find the sweetest home in the neighborhood
                        </h1>
                    </Row>
                </Col>
                <Col as={loginBody}>
                    <Row as={loginShow}>
                        <p>
                            Login
                        </p>
                    </Row>
                    <Container
                        as={loginForm}
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
                                <h3>
                                    Welcom Back to House of Sweets!
                                </h3>
                            </Col>
                            <Col />
                        </Row>
                        <Row>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={loginEmail}>
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
                                <Form.Group as={loginPassword}>
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
                                        <Form.Group as={loginRemember}>
                                            <Form.Check 
                                                type="checkbox"
                                                label="Remember me"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Link>
                                            Forgot Password?
                                        </Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button 
                                        as={loginButton}
                                        type="submit"
                                    >
                                        Login
                                    </Button>
                                </Row>
                            </Form>
                        </Row>
                    </Container>
                    <Row as={register}>
                            <p>
                                Don't have an account?&nbsp;
                                <Link to="/register">
                                    Register
                                </Link>
                            </p>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

const ConnectedLogin = (props) => (
    <AuthConsumer>
        { value => <Login {...props} {...value} />}
    </AuthConsumer>
)

export default ConnectedLogin;