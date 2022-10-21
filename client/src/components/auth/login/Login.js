import { AuthConsumer } from "../../../providers/AuthProvider";
import { useState } from "react";
import Flash from "../../shared/Flash";
import LoginImg from "./LoginImg";

import { Container, Row, Col,  } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = ({ handleLogin, errors, setErrors }) => {
    const [user, setUser] = useState({ email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(user)
    }
    
    return (
        <Container>
            <Row>
                <Col>
                    <LoginImg />
                </Col>
                <Col>
                    <p>Login</p>

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
                    </form>

                    <Row>
                            <p>
                                Don't have an account?&nbsp;
                                <Link to="/register">
                                    Register
                                </Link>
                            </p>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

const ConnectedLogin = (props) => (
    <AuthConsumer>
        { value => <Login {...props} {...value} />}
    </AuthConsumer>
)

export default ConnectedLogin;