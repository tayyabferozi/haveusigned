import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing";
import Envelopes from "./pages/Envelopes";
import HowItWorks from "./pages/HowItWorks";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/my-envelopes" element={<Envelopes />} />
        </Route>
        <Route path="/" element={<MainLayout withDeco />}>
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
