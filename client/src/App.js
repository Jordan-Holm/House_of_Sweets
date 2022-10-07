import { Routes, Route } from "react-router-dom";

import MainNavbar from "./components/shared/MainNavbar";
import Footer from "./components/shared/Footer";
import Nomatch from "./components/shared/Nomatch";
import Home from "./components/shared/home/Home";
import Houses from './components/shared/houses/Houses';

import Register from "./components/auth/Register";

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/register" element={ <Register />} />
      <Route path='/houses' element={ <Houses />} />
      <Route path="/*" element={ <Nomatch /> } />
    </Routes>
    <Footer />
  </>
)

export default App;
