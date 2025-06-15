import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import "./styles/Auth.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Routes with Header and Footer */}
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          {/* Routes without Header and Footer */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
