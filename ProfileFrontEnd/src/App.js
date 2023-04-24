import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import Feedback from "./pages/Feedback";
import BodyContent from "./pages/BodyContent";
import Projects from "./pages/Projects";
import Project1 from "./pages/Project1";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <BodyContent />
              </>
            }
          />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project1" element={<Project1 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
