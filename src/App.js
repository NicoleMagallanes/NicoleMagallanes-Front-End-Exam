// src/App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import DarkModeToggle from "./components/DarkModeToggle";
import LogoutButton from "./components/LogoutButton";
import SocialMediaFooter from "./components/SocialMediaFooter";
import "./index.css";

const queryClient = new QueryClient();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div
            className={`flex flex-col min-h-screen ${
              darkMode
                ? "dark bg-gray-800 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            <div className="container mx-auto px-4 py-8 flex justify-between items-center">
              <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              <LogoutButton darkMode={darkMode} />
            </div>
            <div className="flex-grow">
              <Routes>
                <Route
                  path="/login"
                  element={<LoginPage darkMode={darkMode} />}
                />
                <Route
                  path="/"
                  element={<AppointmentsPage darkMode={darkMode} />}
                />
              </Routes>
            </div>
            <SocialMediaFooter darkMode={darkMode} />
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
