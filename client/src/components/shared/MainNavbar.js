import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container, Tooltip, OverlayTrigger, Image } from "react-bootstrap";
import { AuthConsumer } from "../../providers/AuthProvider";

const MainNavbar = ({ user, handleLogout }) => {

    const linkColor = "white"

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
                    <Nav.Link 
                        href={"/houses"}
                        style={{ color: linkColor }}
                    >
                        Houses
                    </Nav.Link>
                    <OverlayTrigger
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
                            {user.nickname}
                        </Nav.Link>
                    </OverlayTrigger>
                    <Button 
                        onClick={() => handleLogout()}
                        style={{ 
                            backgroundColor: 'grey', 
                            borderColor: 'black',
                        }}
                    >
                        Logout
                    </Button>
                </>
            )
        } else {

            return (
                <>
                    {/* <Link to='/login'>
                        <li>Login</li>
                    </Link>
                    <Link to='/register'>
                        <li>Register</li>
                    </Link> */}
                    <Nav.Link 
                        href={"/houses"}
                        style={{ color: linkColor }}
                    ></Nav.Link>
                    <Nav.Link 
                        href={"/login"}
                        style={{ color: linkColor }}
                    >
                        Login
                    </Nav.Link>
                    <Nav.Link 
                        href={"/register"}
                        style={{ color: linkColor }}
                    >
                        Create An Account
                    </Nav.Link>
                </>
            )
        }
    }

    return (
        <Navbar style={{ 
            backgroundColor: 'purple',
            border: "3px solid lightgrey",
            padding: "15px"
            }} 
            expand="lg">
            <Container fluid="true">
                <Navbar.Brand>
                    <Link 
                        to="/"
                        style={{ textDecoration: 'none', color: 'orange'}}
                    >
                            House of Sweets
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav 
                        fluid="true"
                        className="me-auto"
                        style={{ 
                            textAlign: "center",
                            backgroundColor: "#973ead",
                            border: "5px solid #7a318c",
                            position: "relative",
                            top: "10px"
                        }}
                    >
                        <Nav.Link 
                            href={"/"}
                            style={{ color: linkColor }}
                        >
                            Home
                        </Nav.Link>
                        { correctNavItems() }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const ConnectedMainNavbar = (props) => (
    <AuthConsumer>
        { value => <MainNavbar {...props} {...value} />}
    </AuthConsumer>
)

export default ConnectedMainNavbar;