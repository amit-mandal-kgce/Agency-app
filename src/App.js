import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import Service from './component/Service'
import About from './component/About'
import Product from './component/Product'
import Testimonial from './component/Testimonial'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
