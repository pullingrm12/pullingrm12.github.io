import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Languages from "./components/Languages.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
