import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Newsletter from "./components/Newsletter";
import Footer from "./shared/Footer";
import RootLayout from "./pages/RootLayout";
import LandingPage from "./pages/LandingPage";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        {
          path: "/",
          element: <LandingPage></LandingPage>
        },
        {
          path: "/success",
          element: <OrderSuccess></OrderSuccess>
        }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} id ="root" />
    </>
  )
}

export default App;
