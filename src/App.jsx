import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "/src/Pages/HomePage";
import NoPage from "/src/Pages/NoPage";
import About from "/src/Components/About";
import Contact from "/src/Components/Contact";
import Projects from "./Components/Projects";

import { Toaster } from "react-hot-toast";
import ScrollTop from "./Components/ScrollTop";

const App = () => {
  return (
    <Router basename="/Portfolio">
      {" "}
      {/* Set basename to match your repo */}
      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
