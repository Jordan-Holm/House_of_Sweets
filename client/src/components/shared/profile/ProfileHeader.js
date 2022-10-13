import { AuthConsumer } from "../../../providers/AuthProvider";

const ProfileHeader = ({user}) => (
    <>
        <h1>{user.nickname}'s Profile</h1>
    </>
)

const ConnectedProfileHeader = (props) => (
    <AuthConsumer>
      { value => <ProfileHeader { ...props } { ...value } />}
    </AuthConsumer>
)

export default ConnectedProfileHeader;