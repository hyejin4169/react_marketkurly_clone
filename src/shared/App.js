import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "../components/Header";

//pages
import { Main, Login, Signup, NotFound } from "../pages/page";
import styled from "styled-components";

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
