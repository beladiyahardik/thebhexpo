import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Rediret,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Authentication from "./config/auth/Authentication";
import Home from "./pages/home/Home";
import Index from "./pages/Index";
import Login from "./pages/login/Login";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {Authentication.getItem("isLogin")
          ? <Route path="/home" element={<Home />} />
          : <Route path="/" element={<Index />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/error" element={<h1>Error</h1>} />
      </Routes>
      {Authentication.getItem("isLogin") && <Footer />}
    </BrowserRouter>
  );
}

export default App;
