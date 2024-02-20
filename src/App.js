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

function App() {
  const ctx = useContext(AppContext);
  const isActive = ctx.overlayActive;
  return (
    <div className={`App ${isActive ? "overlay" : ""}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/sheriah-compliance" element={<SheriahCompliance />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      {isActive && <Overlay />}
    </div>
  );
}

export default App;
