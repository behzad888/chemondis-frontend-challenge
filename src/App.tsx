import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Albums from "./pages/Albums";
import Photos from "pages/Photos";

import "assets/settings/_normalize.scss";
import "assets/objects/layout.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="/:id" element={<Photos />} />
      </Routes>
    </Router>
  );
}

export default App;
