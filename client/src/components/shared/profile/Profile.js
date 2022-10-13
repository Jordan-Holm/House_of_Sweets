import { AuthConsumer } from "../../../providers/AuthProvider";
import ProfileHeader from "./ProfileHeader";
import ProfileFavs from "./ProfileFavs";

const Profile = ({}) => (
    <>
        <ProfileHeader />
        <ProfileFavs />
    </>
)

const ConnectedProfile = (props) => (
    <AuthConsumer>
      { value => <Profile { ...props } { ...value } />}
    </AuthConsumer>
)

export default ConnectedProfile;