import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const GET_POST = "GET_POST";


const getPost = createAction(GET_POST, (data) => (data))


const initialState = {
    list: [],
}

// 미들웨어

// allposts
const getPostDB = () => {
    return async function (dispatch) {
        axios
            .get('http://3.38.153.67/api/main')
            .then((res) => {
                const data = res.data
                dispatch(getPost(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }

}


export default handleActions(
    {

        [GET_POST]: (state, action) =>
            produce(state, (draft) => {
                draft.list.push(...action.payload.data);
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