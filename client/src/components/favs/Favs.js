import { useEffect, useState } from 'react';
import FavsList from './FavsList';
import { Modal, Button } from 'react-bootstrap';
import { FavsConsumer } from '../../providers/FavsProvider';
import { useLoaderData, useLocation } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';

const Favs = ({ user, addFavs, getAllFavs, updateFavs, deleteFavs, favorites }) => {
  // const [adding, setAdd] = useState(false)

  // return (
  //   <>
  //     <h1>All Favorites</h1>
  //     <FavsList 
  //       favorites={favorites}
  //       userId={userId}
  //     />
  //   </>
  // )

  const location = useLocation()
  const [adding, setAdd] = useState(false)

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