import { Routes, Route } from "react-router-dom";

import MainNavbar from "./components/shared/MainNavbar";
import Footer from "./components/shared/Footer";
import Nomatch from "./components/shared/Nomatch";
import Home from "./components/shared/home/Home";
import Houses from './components/houses/Houses';

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import FetchUser from "./components/auth/FetchUser";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/register" element={ <Register />} />
          <Route path='/houses' element={ <Houses />} />
          <Route path='/login' element={ <Login />} />
          <Route path="/register" element={ <Register />} />
          <Route path="/*" element={ <Nomatch /> } />
        </Routes>
      </>
    </FetchUser>
    <Footer />
  </>
)

export default App;
