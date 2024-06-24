import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Community from "./pages/Community";
import SheriahCompliance from "./pages/SheriahCompliance";
import Overlay from "./components/overlay/Overlay";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context/context-api";
import { useContext } from "react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Learn from "./pages/Learn";
import LearnDetails from "./pages/LearnDetails";
import Register from "./pages/Register";
import Congratulations from "./pages/Congratulations";
import Products from "./pages/Products";

function App() {
  const ctx = useContext(AppContext);
  const isActive = ctx.overlayActive;
  return (
    <div className={`App ${isActive ? "overlay" : ""}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/community" element={<Community />} />
        <Route path="/sheriah-compliance" element={<SheriahCompliance />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/LearnDetails" element={<LearnDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/congratulations" element={<Congratulations />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      {isActive && <Overlay />}
    </div>
  );
}

export default App;
