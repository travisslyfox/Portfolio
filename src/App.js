import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  document.body.style = 'background: #0d1640';

  return (
    <div>
      <Navbar/>

      <div style={{minWidth: "33%", float: "left"}}>
        <h1 style={{visibility: "hidden"}}>block</h1>
      </div>

      <div style={{width: "33%", float: "left"}} className="background-blue text-white-custom">
        <Router>

            <Routes>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/" element={<Home/>}></Route>
            </Routes>

        </Router>
      </div>

      <div style={{width: "33%", float: "left"}}/>

      <Footer/>
    </div>
  );
}

export default App;
