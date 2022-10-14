import { useEffect } from 'react';
import FavsList from './FavsList';
import { FavsConsumer } from '../../providers/FavsProvider';
import { AuthConsumer } from '../../providers/AuthProvider';

const Favs = ({ user, addFavs, getAllFavs, updateFavs, deleteFavs, favorites }) => {

  useEffect( () => {
    getAllFavs(user.id)
  }, [])

  return (
    <>
      <h1>Favorites</h1>
      <FavsList 
        favorites={favorites}
        userId={user.id}
      />
    </>
  )
}

const ConnectedFavs = (props) => (
    <FavsConsumer>
      { value => <Favs {...value} {...props} /> }
    </FavsConsumer>
  )
const ConnectedAuthProvider = (props) => (
    <AuthConsumer>
      { value => <ConnectedFavs {...value} {...props} /> }
    </AuthConsumer>
  )
  
  export default ConnectedAuthProvider;