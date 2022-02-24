import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";
import axios from "axios";

//action type
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const ADD_COMMENTIMG = "ADD_COMMENTIMG";
const DELETE_COMMENT = "DELETE_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const HELP_COMMENT = "HELP_COMMENT";
// const LOADING = "LOADING";

//action creators
const getComment = createAction(GET_COMMENT, (comment) => ({
  comment,
}));
const addComment = createAction(ADD_COMMENT, (comment) => ({
  comment,
}));
const addCommentImg = createAction(ADD_COMMENTIMG, (img) => ({
  img,
}));
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({
  commentId,
}));
const editComment = createAction(
  EDIT_COMMENT,
  (post_id, comment, comment_id) => ({
    post_id,
    comment,
    comment_id,
  })
);
const helpComment = createAction(HELP_COMMENT, (commentId, uid) => ({
  commentId,
  uid,
}));

// const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  // is_loading: false,
};

const helpCommentFB = (commentId, uid) => {
  const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState) {
    console.log("commentId: ", commentId);
    console.log("uid: ", uid);
    axios
      .post(
        "http://3.38.153.67/api/comment/help",
        { commentId: commentId, uid: uid },
        {
          headers: {
            Authorization: `Bearer ${token_key}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data === false) {
          alert("이미 도움이 돼요한 상품평 입니다.");
        } else {
          dispatch(helpComment(commentId, uid));
        }
      });
  };
};

//ADD COMMENT FB
const addCommentFB = (uid, post_id, title, content, img) => {
  return function (dispatch, getState, { history }) {
    // const uid = getState().user.user.userid;
    console.log("uid: ", uid);
    console.log("pid: ", post_id);
    console.log("title: ", title);
    console.log("comment: ", content);
    console.log("img: ", img);

    const token_key = `${localStorage.getItem("token")}`;

    const form = new FormData();
    form.append("file", img);
    axios
      .post("http://175.118.48.164:7050/upload/spring", form, {
        headers: {
          Authorization: `Bearer ${token_key}`,
        },
      })
      .then((res) => {
        console.log("댓글 이미지 전송: ", res.data);

        let comment = {
          uid: uid,
          pid: post_id,
          commentTitle: title,
          comment: content,
          file: res.data.file,
        };

        axios
          .post(
            "http://3.38.153.67/api/comment/create",
            { ...comment },
            {
              headers: {
                Authorization: `Bearer ${token_key}`,
              },
            }
          )
          .then((res) => {
            console.log("댓글 작성 콘솔: ", res.data);

            dispatch(addComment(res.data));
            alert("댓글 작성이 완료되었습니다! :)");
            window.location.replace(`/detail/${post_id}`);
          })

          .catch(function (error) {
            console.log(error);
          });
        // dispatch(addCommentImg(img));
        // alert("댓글 작성이 완료되었습니다! :)");
        // window.location.reload();
      })

      .catch(function (error) {
        console.log(error);
      });
  };
};

//GET COMMENT FB
const getCommentFB = (post_id) => {
  const token_key = `${localStorage.getItem("token")}`;
  console.log(post_id);
  return function (dispatch, getState, { history }) {
    if (!post_id) {
      return;
    }
    axios
      .get(`http://3.38.153.67/api/comment/${post_id}`, {
        headers: {
          Authorization: `Bearer ${token_key}`,
        },
      })
      .then((res) => {
        console.log("COMMENT DATA: ", res.data);
        dispatch(getComment(res.data.reverse()));
      })
      .catch((err) => {
        console.log("댓글 정보를 가져올 수가 없어요! :(");
      });
  };
};

//EDIT COMMENT FB
const editCommentFB = (commentId, newComment = {}) => {
  return async function (dispatch, getState) {
    const uid = getState().user.user.userid;
    const token_key = localStorage.getItem("token");
    // const _img = getState().image.preview;
    const _comment_idx = getState().comment.list.findIndex(
      (p) => parseInt(p.commentId) === parseInt(commentId)
    );
    const _comment = getState().comment.list[_comment_idx];

    axios({
      method: "put",
      url: `http://3.38.153.67/api/comment/${commentId}`,
      data: {
        uid: uid,
        commentId: commentId,
        // img: _comment.img,
        title: newComment.title,
        comment: newComment.comment,
      },
      headers: {
        Authorization: `Bearer ${token_key}`,
      },
    }).then((res) => {
      dispatch(editComment(1, { ...newComment }));
    });
  };
};

//DELETE COMMENT FB
const deleteCommentFB = (commentId) => {
  const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState) {
    if (!commentId) window.alert("댓글 정보가 없어요! :(");
    console.log(commentId);
    axios({
      method: "delete",
      url: `http://3.38.153.67/api/comment/${commentId}`,
      data: {
        commentId: commentId,
      },
      headers: {
        Authorization: `Bearer ${token_key}`,
      },
    })
      .then((res) => {
        dispatch(deleteComment(commentId));
        window.alert("댓글이 삭제되었습니다!");
        window.location.reload();
      })
      .catch((error) => {
        console.log("axios: comment delete 통신 오류", error);
        window.alert(
          "댓글 삭제를 실패하였습니다! :( \n관리자에게 문의하시길 바랍니다."
        );
      });

    //delete 후 comment count api
    // axios({
    //   method: "post",
    //   url: `http://3.34.193.226/api/count/${commentId}`,
    //   data: {
    //     commentId: commentId,
    //   },
    //   headers: {
    //     Authorization: `Bearer ${cookie}`,
    //   },
    // })
    //   .then(() => {
    //     window.location.reload();
    //   })
    //   .catch((error) => {
    //     console.log("axios: comment delete 통신 오류", error);
    //     window.alert(
    //       "댓글 카운트를 실패하였습니다! :( \n관리자에게 문의하시길 바랍니다."
    //     );
    //   });
  };
};

// //EDIT COMMENT FB
// const editCommentFB = (post_id) => {
//   return function (dispatch, getState, { history }) {
//     if (!post_id) {
//       return;
//     }
//   };
// };

export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = [];
        draft.list.push(...action.payload.comment);
        draft.list = draft.list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.commentId === cur.commentId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.commentId === cur.commentId)] = cur;
            return acc;
          }
        }, []);
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.comment); //push로 주면 배열의 맨 마지막에 쌓이기 때문에, 뷰에서 맨 밑에 쌓인다. 따라서 배열의 맨 앞에 쌓는 unshift로 넘겨준다
      }),
    [ADD_COMMENTIMG]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.comment.commentId].push(action.payload.img); //push로 주면 배열의 맨 마지막에 쌓이기 때문에, 뷰에서 맨 밑에 쌓인다. 따라서 배열의 맨 앞에 쌓는 unshift로 넘겨준다
      }),
    [EDIT_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const new_comment = draft.list[action.payload.commentId].find(
          (c) => c.commentId === action.payload.commentId
        );
        new_comment.comment = action.payload.new_comment;
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const new_comment_list = draft.list.filter((c, i) => {
          return parseInt(action.payload.comment_idx) !== i;
        });

        draft.list = new_comment_list;
      }),
    [HELP_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (c) => c.commentId === action.payload.commentId
        );
        draft.list[idx].helpCount = draft.list[idx].helpCount + 1;
      }),
  },
  initialState
);

const actionCreators = {
  getCommentFB,
  getComment,
  addComment,
  addCommentFB,
  deleteCommentFB,
  deleteComment,
  editCommentFB,
  helpCommentFB,
  helpComment,
  editComment,
};

export { actionCreators };
