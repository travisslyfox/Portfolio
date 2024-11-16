import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Sandbox from "./pages/Sandbox";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { Card } from "react-bootstrap"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  document.body.style = 'background: hsl(224deg 47.8% 11%)';

  return (
    <div>
      {/* <Navbar/> */}


      
      <div className="text-white-custom main" sytle={{}}>
          <Router>

              <Routes>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/sandbox" element={<Sandbox/>}></Route>
              </Routes>

          </Router>
        </div>



      <Footer/>
    </div>
  );
}

export default App;