import { AuthConsumer } from "../../../providers/AuthProvider";

const ProfileHeader = () => (
    <>
        <h1>My Profile</h1>
    </>
)

const ConnectedProfileHeader = (props) => (
    <AuthConsumer>
      { value => <ProfileHeader { ...props } { ...value } />}
    </AuthConsumer>
)

export default ConnectedProfileHeader;