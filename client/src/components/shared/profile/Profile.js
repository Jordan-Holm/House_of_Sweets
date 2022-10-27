import { Container } from "react-bootstrap";
import { AuthConsumer } from "../../../providers/AuthProvider";
import ProfileHeader from "./ProfileHeader";
import ProfileFavs from "./ProfileFavs";
import ProfileInfo from "./ProfileInfo";

const Profile = () => (
    <>
        <Container>
            <ProfileHeader />
            <ProfileInfo />
            <ProfileFavs />
        </Container>
    </>
)

const ConnectedProfile = (props) => (
    <AuthConsumer>
      { value => <Profile { ...props } { ...value } />}
    </AuthConsumer>
)

export default ConnectedProfile;