import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import About from "./page/about";
import Navbar from "./components/navbar";
import Shop from "./page/shop";
import Contact from "./page/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <About /> } />
        <Route path="/shop" element={ <Shop /> } />
        <Route path="/contact" element={ <Contact /> } />
        
      </Routes>
    </Router>
  );
}

export default App;
