import { AuthConsumer } from "../../providers/AuthProvider";
import { useState } from "react";
import Flash from "../shared/Flash";
import { propTypes } from "react-bootstrap/esm/Image";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";


import { imageContainer, imageObject, imageTextRow, registerBody,
    registerShow, registerForm, registerName, registerOrigin, registerEmail, registerPassword, agreementPolicy,
    registerButton, login 
} from "../../shared/Style";

const Register = ({ handleRegister, errors, setErrors }) => {
    const [user, setUser] = useState({ email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        handleRegister(user)
    }

    return (
        <>
            <Row>
                {/* <Col as={imageContainer}>
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
                </Col> */}
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
                                <h3>
                                    Welcom Back to House of Sweets!
                                </h3>
                            </Col>
                            <Col />
                        </Row>
                        <Row>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={registerName}>
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control 
                                        type="name"
                                        name="name"
                                        value={user.name}
                                        onChange={ (e) => setUser({ ...user, email: e.target.value })}
                                        required
                                        placeholder="Name"
                                    />
                                </Form.Group>
                                <Form.Group as={registerEmail}>
                                    <Form.Label>Your Origin</Form.Label>
                                    <Form.Control 
                                        type="origin"
                                        name="origin"
                                        value={user.origin}
                                        onChange={ (e) => setUser({ ...user, email: e.target.value })}
                                        required
                                        placeholder="Origin"
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









// const Register = ({ handleRegister, errors, setErrors}) => {

//     const [user, setUser] = useState({ 
//         email: '',
//         name: '',
//         nickname: '',
//         password: '',
//         passwordConformation: '' 
//     })

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (user.password === user.passwordConformation){
//             handleRegister(user)
//         } else {
//             alert('Password Do Not Match')
//         }
//     }

//     return (
//         <>
//             { errors ?
//                 <Flash 
//                     variant={errors.variant}
//                     msg={errors.msg}
//                     setErrors={setErrors}
//                 />
//             : null
//             }
//             <h1>Create an Account!</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>Email</label>
//                 <input 
//                     type='email'
//                     name='email'
//                     value={user.email}
//                     onChange={ (e) => setUser({ ...user, email: e.target.value })}
//                     required
//                     placeholder='Email'
//                 />
//                 <label>Name</label>
//                 <input 
//                     name='name'
//                     value={user.name}
//                     onChange={ (e) => setUser({ ...user, name: e.target.value })}
//                     required
//                     placeholder='Name'
//                 />
//                 <label>Username</label>
//                 <input 
//                     name='nickname'
//                     value={user.nickname}
//                     onChange={ (e) => setUser({ ...user, nickname: e.target.value })}
//                     required
//                     placeholder='Username'
//                 />
//                 <label>Password</label>
//                 <input 
//                     type='password'
//                     name='password'
//                     value={user.password}
//                     onChange={ (e) => setUser({ ...user, password: e.target.value })}
//                     required
//                     placeholder='Password'
//                 />
//                 <label>Passwrod Conformation</label>
//                 <input 
//                     type='password'
//                     name='passwordConfirmation'
//                     value={user.passwordConformation}
//                     onChange={ (e) => setUser({ ...user, passwordConformation: e.target.value })}
//                     required
//                     placeholder='Password Confirmation'
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     )
// }

const ConnectedRegister = (props) => (
    <AuthConsumer>
        { value => <Register {...props} {...value} />}
    </AuthConsumer>
)

export default ConnectedRegister;