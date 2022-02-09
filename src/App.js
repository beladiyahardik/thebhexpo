import { useEffect } from "react";
import { useSelector } from "react-redux";
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
  const user = useSelector((state) => state.loggedUser.user)
  return (
    <BrowserRouter>
      <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/u/:username" element={<Profile />} />
            <Route path="/error" element={<h1>Error</h1>} />
          </Routes>
          {
            user.userFound && 
      <Footer />
          } 
  
        
    </BrowserRouter>
  );
}

export default App;
