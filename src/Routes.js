import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing";
import Envelopes from "./pages/Envelopes";
import HowItWorks from "./pages/HowItWorks";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Occasion from "./pages/Occasion";
import EnvelopeMessage from "./pages/EnvelopeMessage";
import EnvelopeDetails from "./pages/EnvelopeDetails";
import EnvelopeCreated from "./pages/EnvelopeCreated";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="my-envelopes" element={<Envelopes />} />
          <Route path="envelope-created" element={<EnvelopeCreated />} />

          <Route path="occasion">
            <Route path=":occasionId">
              <Route index element={<Occasion />} />

              <Route path="card">
                <Route path=":cardId">
                  <Route path="message" element={<EnvelopeMessage />} />
                  <Route path="details" element={<EnvelopeDetails />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>

        <Route path="/" element={<MainLayout withDeco />}>
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
