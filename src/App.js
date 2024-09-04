import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element />
        </Routes>

        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
