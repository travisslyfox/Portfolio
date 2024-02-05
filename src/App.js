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

  document.body.style = 'background: hsl(38.57deg 20.59% 13.33%)';

  return (
    <div>
      <Navbar/>

      <Card style={{minHeight: "775px", marginLeft: "18%", marginRight: "18%", marginBottom: "20px", background: "#181a1b"}}>
      
        <div className="text-white-custom main">
          <Router>

              <Routes>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/sandbox" element={<Sandbox/>}></Route>
              </Routes>

          </Router>
        </div>

      </Card>

      <Footer/>
    </div>
  );
}

export default App;
