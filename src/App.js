import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/error" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
