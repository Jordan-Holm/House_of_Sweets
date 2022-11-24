import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container, Tooltip, OverlayTrigger, Image, Row, Col } from "react-bootstrap";
import { AuthConsumer } from "../../providers/AuthProvider";
import { useLocation } from "react-router-dom";

import GhostIcon from "./4.png";
const MainNavbar = ({ user, handleLogout }) => {

    const linkColor = "white"

    const location = useLocation()

    const correctNavItems = () => {
        
        if (user) {

            return(
                <>
                    {/* <Link to='/profile'>
                        <li>Profile</li>
                    </Link>
                    <Link to='/houses'>
                        <li>Houses</li>
                    </Link>
                    <button onClick= {() => handleLogout() }>
                        Logout
                    </button> */}
                    <Col>
                        {/* <Nav.Link 
                            href={"/houses"}
                            style={{ color: linkColor }}
                            >
                            Houses
                        </Nav.Link> */}
                        <Link
                            to="/houses"
                            style={{ textDecoration: 'none', color: 'white', fontSize: '140%' }}
                        >
                            Houses
                        </Link>
                    </Col>
                    <Col>
                        {/* <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="button-tooltip-2">Profile</Tooltip>}
                            >
                            <Nav.Link 
                                href={"/profile"}
                                style={{ color: linkColor }}
                                >
                                <Image
                                    roundedCircle
                                    width="25px"
                                    height="25px"
                                    src={user.image}
                                    />
                                My Profile
                            </Nav.Link>
                        </OverlayTrigger> */}
                        <Link
                            to="/profile"
                            style={{ textDecoration: 'none', color: 'white', fontSize: '140%' }}
                        >
                            Profile
                        </Link>
                    </Col>
                    <Col>
                        <Button 
                            onClick={() => handleLogout()}
                            style={{ 
                                backgroundColor: 'grey', 
                                borderColor: 'black',
                                height: "40px",
                                fontSize: "80%",
                            }}
                            >
                            Logout
                        </Button>
                    </Col>
                </>
            )
        } else {

            return (
                <>
                    <Col>
                        {/* <Nav.Link 
                            href={"/login"}
                            style={{ color: linkColor }}
                            >
                            Login
                        </Nav.Link> */}
                        <Link
                            to="/login"
                            style={{ textDecoration: 'none', color: 'white', fontSize: '140%' }}
                        >
                            Login
                        </Link>
                    </Col>
                    <Col>
                        {/* <Nav.Link 
                            href={"/register"}
                            style={{ color: linkColor }}
                            >
                            Create An Account
                        </Nav.Link> */}
                        <Link
                            to="/register"
                            style={{ textDecoration: 'none', color: 'white', fontSize: '140%' }}
                        >
                            Create An Account
                        </Link>
                    </Col>
                </>
            )
        }
    }
    if ( location.pathname === '/login' || location.pathname === '/register' ){
        return(
            <>
            </>
        )
    } else {
        return (
            // <Navbar style={{ 
            //         border: "3px solid lightgrey",
            //         padding: "15px"
            //     }} 
            //     expand="lg"
            // >
            //     <Container fluid="true">
            //         <Row>
            //             <Navbar.Brand>
            //                 <Link 
            //                     to="/"
            //                     style={{ textDecoration: 'none' }}
            //                 >
            //                     <Image 
            //                             src={GhostIcon}
            //                             width="10%"
            //                     />
            //                 </Link>
            //             </Navbar.Brand>
            //             <Nav 
            //                 fluid="true"
            //                 className="me-auto"
            //                 style={{ 
            //                     textAlign: "center",
            //                     position: "relative",
            //                     top: "10px"
            //                 }}
            //                 >
            //                 <Col>
            //                     <Nav.Link 
            //                         href={"/"}
            //                         style={{ color: linkColor }}
            //                         >
            //                         Home
            //                     </Nav.Link>
            //                 </Col>
            //                 <Col>
            //                     <Nav.Link 
            //                         href={"/teams"}
            //                         style={{ color: linkColor }}
            //                         >
            //                         Team
            //                     </Nav.Link>
            //                 </Col>
            //                 { correctNavItems() }
            //             </Nav>
            //         </Row>
            //     </Container>
            // </Navbar>
            <>
                    <Row
                        style={{ 
                            backgroundColor: "#1F1300",
                            border: "3px solid #FFFFFF",
                            position: "sticky",
                            top: "0",
                            zIndex: "50",
                        }}
                    >
                        <Col>
                            <Link
                                to="/"
                                style={{ textDecoration: 'none', color: 'white', fontSize: '140%' }}
                            >
                                <Image 
                                    src={GhostIcon}
                                    width="30%"
                                    />
                            </Link>
                        </Col>
                        <Col>
                            <Link
                                to="/"
                                style={{ textDecoration: 'none', color: 'white', fontSize: '140%' }}
                            >
                                Home
                            </Link>
                        </Col>
                        <Col>
                            <Link
                                to="/teams"
                                style={{ textDecoration: 'none', color: 'white', fontSize: '140%' }}
                            >
                                Team
                            </Link>
                        </Col>
                        { correctNavItems() }
                    </Row>
            </>
        )
    }
    
}

const ConnectedMainNavbar = (props) => (
    <AuthConsumer>
        { value => <MainNavbar {...props} {...value} />}
    </AuthConsumer>
)

export default ConnectedMainNavbar;