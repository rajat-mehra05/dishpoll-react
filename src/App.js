import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import TabScreen from "./pages/TabScreen";

function App() {
  return (
    <div className="App h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/tabscreen" element={<TabScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
