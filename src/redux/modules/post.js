import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const GET_POST = "GET_POST";


const getPost = createAction(GET_POST, (post_list) => ({ post_list }))


const initialState = {
    list: [],
}


// 미들웨어

// allposts
const getPostDB = () => {
    return async function (dispatch, getState, { history }) {
        axios
            .get()
            .then((res) => {
                dispatch(getPost(res.data.posts))
            })
            .catch((err) => {
                console.log(err)
            })
        // try {
        //     const post_list = await apis.posts();
        //     console.log(post_list.data.loginUser);
        //     sessionStorage.setItem("loginUser", post_list.data.loginUser)
        //     dispatch(getPost(post_list.data.posts));
        // } catch (err) {
        //     console.log("오류")
        // }

    }

}


export default handleActions(
    {

        [GET_POST]: (state, action) =>
            produce(state, (draft) => {
                draft.list.push(...action.payload.post_list);
                console.log("성공")
            }),


    },
    initialState
);


const actionCreators = {
    getPost,
    getPostDB,
}

export { actionCreators };