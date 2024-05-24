import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Layout from "./components/Layout";
import About from "./screens/About";
import Faq from "./screens/Faq";
import Contact from "./screens/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
