import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
