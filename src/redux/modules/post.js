import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const GET_POST = "GET_POST";
const DETAIL_POST = "DETAIL_POST";
const MD_POST = "GET_MD";

const getPost = createAction(GET_POST, (list) => ({ list }));
const detailPost = createAction(DETAIL_POST, (detail_list) => ({
  detail_list,
}));
const getMdPost = createAction(MD_POST, (md_category) => ({ md_category }));

const initialState = {
  list: [],
  md_list: [],
  detail_list: [],
};

// 미들웨어

// allposts
const getPostDB = () => {
  return async function (dispatch, getState, { history }) {
    const all_post = [];
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
        // console.log("!!!!!LIST 다 가져왔다!!!!!");

        const banner_list = res.data.banner_list;
        const kurlyonly_list = res.data.kurlyonly_list;
        const md_list = res.data.md_list;
        const sale_list = res.data.sale_list;

        const list = [banner_list, kurlyonly_list, md_list, sale_list];

        // dispatch(getPost(banner_list, kurlyonly_list, md_list, sale_list));
        dispatch(getPost(list));
      })

      .catch((err) => {
        console.log("Main Page GETPOST Error: ", err);
      });
  };
};

const detailPostDB = (pid) => {
  return async function (dispatch, getState, { history }) {
    // console.log(pid);

    axios({
      method: "get",
      url: `http://3.38.153.67/api/products/${pid}`,
    })
      .then((res) => {
        // console.log("!!!!!상세페이지 다 가져왔다!!!!!", res.data.product);
        const detail_list = res.data.product;

        // console.log(detail_list);
        dispatch(detailPost(detail_list));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getMdPostDB = (no) => {
  return async function (dispatch, getState) {
    const num = parseInt(no);
    // console.log(num);
    axios({
      method: "get",
      url: `http://3.38.153.67/api/main/md/${num}`,
    })
      .then((res) => {
        // console.log("!!!MD_LIST 가져왔다!!!!!", res.data);
        const md_list = res.data;
        const md_category = [];

        md_list.forEach((doc) => {
          md_category.push({ ...doc });
        });
        dispatch(getMdPost(md_category));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.list);
        // console.log("성공");
      }),

    [MD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.md_list.push(...action.payload.md_list);
        // console.log("성공");
      }),

    [MD_POST]: (state = initialState, action = {}) => {
      return { ...state, list2: action.payload.md_category };
    },

    [DETAIL_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.detail_list = action.payload.detail_list;
        // console.log("성공");
      }),

    // [DETAIL_POST]: (state = initialState, action = {}) => {
    //   return { ...state, detail_list: action.payload.detail_list };
    // },
  },
  initialState
);

const actionCreators = {
  getPost,
  getPostDB,
  detailPostDB,
  detailPost,
  getMdPostDB,
  getMdPost,
};

export { actionCreators };
