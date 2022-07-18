import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Albums from "./pages/Albums";
import 'assets/settings/_normalize.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Albums />} />
      </Routes>
    </Router>
  );
}

export default App;
