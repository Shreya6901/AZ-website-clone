import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpskillPage from "./pages/UpskillPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/upskill" element={<UpskillPage />} />
      </Routes>
    </Router>
  );
}

export default App;
