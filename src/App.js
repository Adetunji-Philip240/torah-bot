import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TorahDashboardHeader from "./components/TorahDashboardHeader";
import TorahMainContentGrid from "./components/TorahMainContentGrid";
import Page from "./first_torah/page";

function App() {
  return (
    <Router>
      <TorahDashboardHeader />

      <Routes>
        {/* Default Route (Home) */}
        <Route path="/" element={<TorahMainContentGrid />} />

        {/* Page Route */}
        <Route path="/page" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
