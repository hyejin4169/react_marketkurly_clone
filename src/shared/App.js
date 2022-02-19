import logo from "../logo.svg";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header";

//pages
import { Main, Login, Signup, NotFound } from "../pages/page";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/write" element={<Write />} />
        <Route path="/write/:id" element={<Write />} />
        <Route path="/post/:id" element={<CardDetail />} /> */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
