import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hotels from "./pages/Hotels";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/hotels" element={<Hotels/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

//1D3557
//457B9D
//A8DADC
//F1FAEE
//E63946

export default App;
