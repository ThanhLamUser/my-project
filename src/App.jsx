import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Newsletter from "./components/Newsletter";
import Footer from "./shared/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the root path */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Features />
              <About />
              <Pricing />
              <Newsletter />
              <Footer />
            </>
          }
        />
        {/* Redirect all other paths to "/" */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
