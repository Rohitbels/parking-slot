import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/Login";
import MyBooking from "./pages/MyBooking";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="mybooking" element={<MyBooking />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
