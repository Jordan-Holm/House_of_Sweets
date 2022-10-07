import { Link } from "react-router-dom";

const MainNavbar = () => {

    return(
        <>
            <nav>
                <ul>
                    <Link to='/'>
                        <li>HOME</li>
                    </Link>
                    <Link to='/houses'>
                        <li>VIEW HOUSES</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default MainNavbar;