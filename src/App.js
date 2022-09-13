import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DishesList from "./pages/DishesList";
import LoginPage from "./pages/LoginPage";
import TabScreen from "./pages/TabScreen";

function App() {
  return (
    <div className="App h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/tabscreen" element={<TabScreen />} />
          <Route path="/dishlist" element={<DishesList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
