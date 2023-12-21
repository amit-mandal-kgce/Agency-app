import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import From from "./models/From";
import Home from "./models/Home";
import About from './models/About'
import Product from './models/Product'
import Service from './models/Service'
import Testimonal from './models/Testimonal'
import Footer from './component/Footer'
import Navbar from './component/Navbar'

const ProtectedRoute = ({ children, auth = false }) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null || false;

  if (!isLoggedIn && auth) {
    return <Navigate to={"/users/sign_in"} />;
  } else if (
    isLoggedIn &&
    ["/users/sign_in", "/users/sign_up"].includes(window.location.pathname)
  ) {
    return <Navigate to={"/"} />;
  }
  return children;
};


function App() {
  return (
    <main>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute auth={true}>
                <Navbar/>
                <Home />
                <Footer/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/service"
            element={
              <ProtectedRoute auth={true}>
                <Navbar/>
                <Service />
                <Footer/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute auth={true}>
                <Navbar/>
                <About />
                <Footer/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/product"
            element={
              <ProtectedRoute auth={true}>
                <Navbar/>
                <Product />
                <Footer/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/testimonal"
            element={
              <ProtectedRoute auth={true}>
                <Navbar/>
                <Testimonal />
                <Footer/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/sign_in"
            element={
              <ProtectedRoute>
                <From isSignInPage={true} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/sign_up"
            element={
              <ProtectedRoute>
                <From isSignInPage={false} />
              </ProtectedRoute>
            }
          />
        </Routes>
    </main>
  );
}

export default App;
