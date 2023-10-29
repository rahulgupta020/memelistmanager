import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar1 from "./Components/Navbar1";
import Dashboard from "./Components/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import PageNotFound from "./Components/PageNotFound";
import MakeList from "./Components/MakeList";
import ShowList from "./Components/ShowList";
import "./assets/css/style.css";

const App = () => {

  return(
    <>
      <BrowserRouter basename="/memelistmanager">
      <Navbar1 />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/makelist" element={<ProtectedRoute element={<MakeList />} />} />
          <Route path="/showlist" element={<ProtectedRoute element={<ShowList />} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;