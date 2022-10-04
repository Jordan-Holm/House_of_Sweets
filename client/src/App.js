import { Routes, Route } from "react-router-dom";

import MainNavbar from "./components/shared/MainNavbar";
import Footer from "./components/shared/Footer";
import Nomatch from "./components/shared/Nomatch";
import Home from "./components/shared/home/Home";

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path="/" element={ <Home /> } />

      <Route path="/*" element={ <Nomatch /> } />
    </Routes>
    <Footer />
  </>
)

export default App;
