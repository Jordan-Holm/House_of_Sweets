import { AuthConsumer } from "../../../providers/AuthProvider";
import { useState } from "react";
import Flash from "../../shared/Flash";
import LoginImg from "./LoginImg";

import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = ({ handleLogin, errors, setErrors }) => {
    const [user, setUser] = useState({ email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(user)
    }
    
    return (
        <>
            <style type="text/css">
                {`
                    .loginShow {
                        text-align: right;
                        padding-right: 5%;
                    }

                    .loginForm {
                        width: 80%;
                        padding: 10% 0% 10% 0%;
                    }

                    .loginEmail {
                        padding: 5% 0% 5% 0%;
                    }

                    .loginPassword {
                        padding-bottom: 5%;
                    }

                    .loginRemember {
                        padding-bottom: 15%;
                    }

                    .forgotPasswordText {
                        color: gray;
                    }

                    .register {
                        text-align: center;
                    }

                    
                    .imageContainer  {
                        align-content: center;
                        background-color: #000000;
                    }

                    .imageObject {
                        border-radius: 5% 10% 25% 10%;
                        padding: 0%;
                        margin: -15% 5% 0% -5%;
                        scale: 65%;
                    }

                    .imageText {
                        font-family: "Urbanist";
                        color: #FF7F11;
                    }

                    .imageTextRow {
                        margin: -20% 5% 0% 5%;

                    }
                `}
            </style>

            <Row>
                <Col className="imageContainer">
                    <Row>
                        <Image 
                            className="imageObject"
                            src="https://images.unsplash.com/photo-1633380170808-9404cd630e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                            alt="Ghost Image"
                        />
                    </Row>
                    <Row className="imageTextRow">
                        <h1
                            className="imageText"
                        >
                            Find the sweetest home in the neighborhood
                        </h1>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <p
                            className="loginShow"
                        >
                            Login
                        </p>
                    </Row>
                    <Container
                        className="loginForm"
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
                                <Form.Group className="loginEmail">
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
                                <Form.Group className="loginPassword">
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
                                        <Form.Group className="loginRemember">
                                            <Form.Check 
                                                type="checkbox"
                                                label="Remember me"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Link
                                            className="forgotPasswordText"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button type="submit">
                                        Login
                                    </Button>
                                </Row>
                            </Form>
                        </Row>
                    </Container>
                    {/* <p>Login</p>

                    { errors ?
                        <Flash 
                            variant={errors.variant}
                            msg={errors.msg}
                            setErrors={setErrors}
                        />
                    : null
                    }
                    <h2>Welcome Back to House of Sweets!</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Your Email</label>
                        <input 
                            type='email'
                            name='email'
                            value={user.email}
                            onChange={ (e) => setUser({ ...user, email: e.target.value })}
                            required
                            placeholder="Email"
                        />
                        <br />
                        <label>Password</label>
                        <input 
                            type='password'
                            name='password'
                            value={user.password}
                            onChange={ (e) => setUser({ ...user, password: e.target.value })}
                            required
                            placeholder="Password"
                        />
                        <br />
                        <button type="submit">Submit</button>
                    </form> */}

                    <Row className="register">
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