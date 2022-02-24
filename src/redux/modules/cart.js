import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

// actions
const ADD_CART = "ADD_CART";
const GET_CART = "GET_CART";
const EDIT_CART = "EDIT_CART";
const DELETE_CART = "DELETE_CART";

// action creators
const addCart = createAction(ADD_CART, (cart_data) => ({ cart_data }));
const getCart = createAction(GET_CART, (list) => ({ list }));
const editCart = createAction(EDIT_CART, (pid, quantity) => ({
  pid,
  quantity,
}));
const deleteCart = createAction(DELETE_CART, (pid) => ({
  pid,
}));

// initial state
const initialState = {
  list: [],
};

// middlewares
const getCartDB = () => {
  return function (dispatch, getState, { history }) {
    const token_key = `${localStorage.getItem("token")}`;
    axios
      .get("http://3.38.153.67/api/carts", {
        headers: {
          Authorization: `Bearer ${token_key}`,
        },
      })
      .then((res) => {
        console.log("!!!!!CARTLIST 서버에서 가져왔다!!!!!", res.data);
        dispatch(getCart(res.data));
      })
      .catch((err) => {
        console.log("!!!!!CARTLIST 조회 error!!!!!", err);
      });
  };
};

const addCartDB = (pid, quantity) => {
  return function (dispatch, getState, { history }) {
    const token_key = `${localStorage.getItem("token")}`;
    console.log(pid, quantity);
    console.log(token_key);
    axios
      .post(
        `http://3.38.153.67/api/carts/${pid}`,
        {
          pid: pid,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token_key}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(addCart(res.data));
        alert("장바구니에 물품을 담으셨습니다!");
        // window.location.replace("/cart");
        // console.log("카트담기 성공");
      })
      .catch((err) => {
        console.log("카트담기 실패", err);
      });
  };
};

const editCartDB = (pid, quantity) => {
  return function (dispatch, getState, { history }) {
    const token_key = `${localStorage.getItem("token")}`;
    axios
      .put(
        `http://3.38.153.67/api/carts/${pid}`,
        {
          pid: pid,
          quantity: quantity,
        },
        {
          headers: {
            // "content-type": "applicaton/json;charset=UTF-8",
            // accept: "application/json",
            Authorization: `Bearer ${token_key}`,
          },
        }
      )
      .then((res) => {
        dispatch(editCart(pid, quantity));
      })
      .catch((err) => {
        console.log("카운트 변경 실패", err);
      });
  };
};

const deleteCartDB = (pid) => {
  return function (dispatch, getState, { history }) {
    const token_key = `${localStorage.getItem("token")}`;
    const _cart_list = getState().cart.list;
    console.log(_cart_list);
    axios({
      method: "delete",
      url: `http://3.38.153.67/api/carts/${pid}`,
      data: {
        pid: pid,
      },
      headers: {
        // "content-type": "applicaton/json;charset=UTF-8",
        // accept: "application/json",
        Authorization: `Bearer ${token_key}`,
      },
    })
      .then((res) => {
        const idx = _cart_list.findIndex((c) => {
          return parseInt(c.pid) === parseInt(pid);
        });

        dispatch(deleteCart(idx));
      })
      .catch((err) => {
        console.log("!!!!!CARTLIST 조회 error!!!!!", err);
      });
  };
};

// reducer
export default handleActions(
  {
    [ADD_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(...action.payload.cart_data);
      }),
    [GET_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.list);

        //중복 검사
        draft.list = draft.list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.pid === cur.pid) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.pid === cur.pid)] = cur;
            return acc;
          }
        }, []);
      }),
    [EDIT_CART]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((v) => v.pid === action.payload.pid);
        draft.list[idx].quantity = action.payload.quantity;
      }),
    [DELETE_CART]: (state, action) =>
      produce(state, (draft) => {
        const new_cart_list = draft.list.filter((c, i) => {
          return parseInt(c.cartItemId) !== parseInt(action.payload.cartItemId);
        });

        draft.list = new_cart_list;
      }),
  },
  initialState
);

const actionCreators = {
  getCartDB,
  addCartDB,
  editCartDB,
  deleteCartDB,
};

export { actionCreators };
