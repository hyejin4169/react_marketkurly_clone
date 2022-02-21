import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

// actions
const ADD_CART = "ADD_CART";
const GET_CART = "GET_CART";
const DELETE_CART = "DELETE_CART";

// action creators
const addCart = createAction(ADD_CART, () => ({}));
const getCart = createAction(GET_CART, () => ({}));
const deleteCart = createAction(DELETE_CART, (cartItemId) => ({
  cartItemId,
}));

// initial state
const initialState = {
  list: [
    {
      cartItemId: 1,
      uid: 1,
      pid: 1,
      title: "GAP 스위텔 토마토 500g",
      price: 5900,
      img: "https://img-cf.kurly.com/shop/data/goods/1590727164974i0.jpg",
      quantity: 1,
    },
    {
      cartItemId: 2,
      uid: 1,
      pid: 2,
      title: "[고래사어묵] 김치 우동 전골",
      price: 9900,
      img: "https://img-cf.kurly.com/shop/data/goods/1634538009994i0.jpg",
      quantity: 2,
    },
    {
      cartItemId: 3,
      uid: 1,
      pid: 3,
      title: "[썬키스트] 고당도 오렌지 3입 750g (대과)",
      price: 10600,
      img: "https://img-cf.kurly.com/shop/data/goods/1463996583774i0.jpg",
      quantity: 3,
    },
    {
      cartItemId: 4,
      uid: 1,
      pid: 4,
      title: "[창억] 호박인절미",
      price: 8500,
      img: "https://img-cf.kurly.com/shop/data/goods/163762991123i0.jpeg",
      quantity: 4,
    },
  ],
};

// middlewares
const getCartDB = (uid) => {
  return function (dispatch, getState, { history }) {
    // axios({
    //   method: "post",
    //   url: "http://3.34.193.226/api/carts",
    //   headers: {
    //     "content-type": "applicaton/json;charset=UTF-8",
    //     accept: "application/json",
    //     Authorization: `Bearer ${token_key}`,
    //   },
    // })
    //   .then((res) => {
    //     let list = [];
    //     console.log("!!!!!CARTLIST 서버에서 가져왔다!!!!!", res.data);
    //     res.data.forEach((a) => list.push(a));
    //     dispatch(getCart(list));
    //   })
    //   .catch((err) => {
    //     console.log("!!!!!CARTLIST 조회 error!!!!!", err);
    //   });
    dispatch(getCart());
  };
};

const addCartDB = (product_id, count) => {
  return function (dispatch, getState, { history }) {
    console.log(product_id, count);
    axios
      .post(`http://localhost:3003/cart/${product_id}`, {
        counts: count,
      })
      .then((response) => {
        /* dispatch(addCart()) */
        console.log("카트담기 성공");
      })
      .catch((err) => {
        console.log("카트담기 실패", err);
      });
  };
};

const editCartCountDB = (productInCartId, count) => {
  return function (dispatch, getState, { history }) {
    axios
      .put(`http://localhost:3003/cart/${productInCartId}`, {
        count: count,
      })
      .then((res) => {})
      .catch((err) => {
        console.log("카운트 변경 실패", err);
      });
  };
};

const deleteCartDB = (cartItemId) => {
  return function (dispatch, getState, { history }) {
    // axios({
    //     method: "delete",
    //     url: `http://3.34.193.226/api/carts/${cartItemId}`,
    //     headers: {
    //       "content-type": "applicaton/json;charset=UTF-8",
    //       accept: "application/json",
    //       Authorization: `Bearer ${token_key}`,
    //     },
    //   })
    //     .then((res) => {
    dispatch(deleteCart(cartItemId));
    // })
    // .catch((err) => {
    //   console.log("!!!!!CARTLIST 조회 error!!!!!", err);
    // });
  };
};

// reducer
export default handleActions(
  {
    [ADD_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift();
      }),
    [GET_CART]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push();
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
  editCartCountDB,
  deleteCartDB,
};

export { actionCreators };
