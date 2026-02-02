import {  Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Certificates from "./Components/Certificates";
import Navbar from "./Components/Navbar";
import FloatingBlobs from "./Components/FloatingBlobs";

function App() {
  return (
<>
  <FloatingBlobs />
  <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/certificates" element={<Certificates />} />
  </Routes>
</>
  );
}

export default App;
