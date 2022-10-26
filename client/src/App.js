import { Routes, Route } from "react-router-dom";

import MainNavbar from "./components/shared/MainNavbar";
import Footer from "./components/shared/Footer";
import Nomatch from "./components/shared/Nomatch";
import Home from "./components/shared/home/Home";
import Houses from './components/houses/Houses';
import HouseDetail from "./components/houses/HouseDetail";
import Profile from "./components/shared/profile/Profile";
import Teams from './components/shared/team/Teams'
import Register from "./components/auth/Register";
import Login from "./components/auth/login/Login";
import FetchUser from "./components/auth/FetchUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import Styled from 'styled-components'

const AppContainer = Styled.div`
  background-color: #1f1300;
  color: white;
  font-style: normal;
  font-family: "Urbanist";
`
const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
        <AppContainer>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/register" element={ <Register />} />
            <Route path='/houses' element={ <Houses />} />
            <Route path='/houses/:houseId' element={ <HouseDetail />} />
            <Route path='/teams' element={ <Teams />} />
            <Route path='/login' element={ <Login />} />
            <Route path="/profile" element={ <Profile />} />
            <Route path='/login' element={ <Login />} />
            <Route path="/*" element={ <Nomatch /> } />
          </Routes>
        </AppContainer>
      </>
    </FetchUser>
    <Footer />
  </>
)

export default App;
