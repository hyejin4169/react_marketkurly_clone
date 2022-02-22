import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const GET_POST = "GET_POST";

const getPost = createAction(GET_POST, (list) => ({ list }));

const initialState = {
  list: [],
};

// 미들웨어

// allposts
const getPostDB = () => {
  return async function (dispatch, getState, { history }) {
    // let all_list = [];
    axios({
      method: "get",
      url: "http://3.38.153.67/api/main",
      // headers: {
      //   // "content-type": "applicaton/json;charset=UTF-8",
      //   // accept: "application/json",
      //   // Authorization: `Bearer ${cookie}`,
      // },
    })
      .then((res) => {
        console.log("!!!!!LIST 다 가져왔다!!!!!", res.data);
        dispatch(getPost(res.data));
      })

      .catch((err) => {
        console.log("Main Page GETPOST Error: ", err);
      });
  };
};

// detail page
// axios({
//     method: "get",
//     url: "http://3.38.153.67/api/products/29",
//   })
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.log("!!!!!상세페이지 다 가져왔다!!!!!", err);
//     });

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.list);
        console.log("성공");
      }),
  },
  initialState
);

const actionCreators = {
  getPost,
  getPostDB,
};

export { actionCreators };
