import { Home, About, Contacts, Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      {/* ROUTES FRONTEND ROUTES */}
      <Routes>
        {/* Home Component */}
        <Route path="/" element={<Home />} />
        {/* About Component */}
        <Route path="/about" element={<About />} />
        {/* Contact Component */}
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
