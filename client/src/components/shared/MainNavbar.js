import { Link } from "react-router-dom";
import { AuthConsumer } from "../../providers/AuthProvider";

const MainNavbar = ({ user, handleLogout }) => {

    const correctNavItems = () => {
        if (user) {

            return(
                <>
                    <Link to='/profile'>
                        <li>Profile</li>
                    </Link>
                    <Link to='/houses'>
                        <li>Houses</li>
                    </Link>
                    <button onClick= {() => handleLogout() }>
                        Logout
                    </button>
                </>
            )
        } else {

            return (
                <>
                    <Link to='/login'>
                        <li>Login</li>
                    </Link>
                    <Link to='/register'>
                        <li>Register</li>
                    </Link>
                </>
            )
        }
    }

    return (
        <>
            <nav>
                <ul>
                    <Link to='/'>
                        Home
                    </Link>
                    { correctNavItems() }
                </ul>
            </nav>
        </>
    )
}

const ConnectedMainNavbar = (props) => (
    <AuthConsumer>
        { value => <MainNavbar {...props} {...value} />}
    </AuthConsumer>
)

export default ConnectedMainNavbar;