import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import DishesList from "./pages/DishesList";
import LoginPage from "./pages/LoginPage";
import PollResults from "./pages/PollResults";
import TabScreen from "./pages/TabScreen";

function App() {
  return (
    <div className="App h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route
            path="/tabscreen"
            element={
              <ProtectedRoute>
                {" "}
                <TabScreen />{" "}
              </ProtectedRoute>
            }
          />

          <Route
            path="/dishlist"
            element={
              <ProtectedRoute>
                <DishesList />{" "}
              </ProtectedRoute>
            }
          />

          <Route
            path="/dishlist/polls"
            element={
              <ProtectedRoute>
                <PollResults />{" "}
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
