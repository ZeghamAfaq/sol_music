import React from "react";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />
      <Route index element={<About />} />
        <Route path="/contactpage" element={<Contact />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
