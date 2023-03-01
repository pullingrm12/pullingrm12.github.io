import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
