import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/error" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
