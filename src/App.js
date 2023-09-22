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

      <div className="background-blue text-white-custom main">
        <Router>

            <Routes>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/" element={<Home/>}></Route>
            </Routes>

        </Router>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
