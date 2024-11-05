import HomeScreen from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Navbar from "./Pages/Navbar/Navbar";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./Pages/Footer/Footer";
import ProductDetails from "./Pages/Products/Sections/ProductDetails";

function App() {
  return (
    <Router>
      <AnimatedCursor />
      <Navbar />
      <Routes >
        <Route path="/" element={<HomeScreen />} />
        <Route path="shop" element={<Products />} />
        <Route path="/product" element={<ProductDetails />} />
      </Routes >
      <Footer />
    </Router>
  );
}

export default App;
