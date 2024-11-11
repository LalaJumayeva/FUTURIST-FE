import HomeScreen from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Navbar from "./Pages/Navbar/Navbar";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./Pages/Footer/Footer";
import ProductDetails from "./Pages/Products/Sections/ProductDetails";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import SignupForm from "./Pages/Login/Register";

function App() {
  return (
    <Router>
      <AnimatedCursor />
      <Navbar />
      <Routes >
        <Route path="/" element={<HomeScreen />} />
        <Route path="shop" element={<Products />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignupForm />} />
      </Routes >
      <Footer />
    </Router>
  );
}

export default App;
