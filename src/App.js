import Home from "./pages/Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Allpage from "./pages/Allpage";
import Experience from "./pages/Experience";
import About from "./pages/About";
import "../src/css/style.css";
import "../src/css/bootstrap.min.css";
// import "../src/css/font-awesome.min.css";
import "../src/css/magnific-popup.css";
// import "../src/css/owl.carousel.css";
// import "../src/css/owl.theme.css";
// import "../src/css/owl.transitions.css";

// // import "../src/css/ytplayer.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Client from "./pages/Client";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
   <Router>
     <Routes>
       <Route exact path="/" element={<Allpage />} ></Route>
       <Route path="/home" element={<Home />}></Route>
       <Route path="/About" element={<About />}></Route>
        <Route path="/Experience" element={ <Experience/> }></Route>
        <Route path="/Services" element={ <Services/> }></Route>
        <Route path="/Client" element={ <Client/> }></Route>
        <Route path="/Portfolio" element={ <Portfolio/> }></Route>
        <Route path="/Blog" element={ <Blog/> }></Route>
        <Route path="/Contact" element={ <Contact/> }></Route>
    </Routes>
   </Router>
  </>
  );
};

export default App;
