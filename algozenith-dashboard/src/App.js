import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import UpskillPage from "./pages/UpskillPage";

function App() {
  useEffect(() => {
    window.history.replaceState(null, "", "/upskill");
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/upskill" element={<UpskillPage />} />
        <Route path="*" element={<Navigate to="/upskill" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
