import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Newsletter from "./components/Newsletter";
import Footer from "./shared/Footer";

function App() {
  useEffect(() => {
    // Force reload page when navigating
    if (performance.getEntriesByType("navigation")[0].type !== "reload") {
      window.location.reload();
    }
  }, []);

  return (
    <Router>
      <Routes>
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
        {/* Redirect all invalid paths to "/" */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
