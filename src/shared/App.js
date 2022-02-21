// import logo from "../logo.svg";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import "../App.css";

//components
import { Header } from "../components/component";

//pages
import { Main, Login, Signup, Cart, NotFound } from "../pages/page";
import Cart_ from "../pages/Cart";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />

        {/* <Route path="/write" element={<Write />} />
        <Route path="/write/:id" element={<Write />} />
        <Route path="/post/:id" element={<CardDetail />} /> */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
