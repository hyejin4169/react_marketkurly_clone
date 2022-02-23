// import logo from "../logo.svg";
import { Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actionCreators as userActions } from "../redux/modules/user";

import "../App.css";

//components
import { Header, CommentBox } from "../components/component";

//pages
import {
  Main,
  Login,
  Signup,
  CartList,
  NotFound,
  CommentWrite,
} from "../pages/page";

function App() {
  const dispatch = useDispatch();
  const token_key = `${localStorage.getItem("token")}`;
  const islogin = useSelector((state) => state.user.is_login);
  console.log("islogin: ", islogin);

  useEffect(() => {
    // if (!islogin) {
    //   return;
    // }
    // if (islogin) {
    dispatch(userActions.loginCheckDB(token_key));
    // }
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/comment/write/:id" element={<CommentWrite />} />
        <Route path="/commentbox" element={<CommentBox />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
