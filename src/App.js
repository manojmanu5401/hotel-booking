import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hotels from "./pages/Hotels";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Hotel from "./pages/Hotel";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/hotels" element={<Hotels />}></Route>
              <Route path="/hotel" element={<Hotel />}></Route>
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      )}
    </>
  );
}

//1D3557
//457B9D
//A8DADC
//F1FAEE
//E63946

export default App;
