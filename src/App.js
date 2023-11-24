import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import Service from './component/Service'
import About from './component/About'
import Product from './component/Product'
import Testimonial from './component/Testimonial'
import UnseenPage from './component/UnseenPage';
import HelpCenter from './component/HelpCenter';
import Terms from './component/Terms';
import Legal from './component/Legal';
import PolicyPriv from './component/PolicyPriv';
import Status from './component/Status';
import DesignPage from './component/DesignPage';

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
          <Route path='/unseenpage' element={<UnseenPage/>}/>
          <Route path='/designpage' element={<DesignPage/>}/>
          <Route path='helpcenter' element={<HelpCenter/>}/>
          <Route path='terms' element={<Terms/>}/>
          <Route path='legal' element={<Legal/>}/>
          <Route path='policypriv' element={<PolicyPriv/>}/>
          <Route path='status' element={<Status/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
