import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import VideoPage from "./pages/VideoPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { ToastContainer } from "react-toastify";
import AdminPortal from "./components/AdminPortal";
import UpdateVideo from "./components/UpdateVideo";

function App() {
  return (
    <Router>
      <div className="app-container">
        <ToastContainer />
        <Header />
        <main>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/:id" element={<VideoPage />} />
            <Route path="/admin" element={<AdminPortal />} />
            <Route path="/update-video/:videoId" element={<UpdateVideo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
