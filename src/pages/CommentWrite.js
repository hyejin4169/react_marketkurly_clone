import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import CommentList from "../components/CommentList";

import { actionCreators as commentActions } from "../redux/modules/comment";
import { actionCreator as imageActions } from "../redux/modules/image";

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const productId = params.id;
  const userId = useState((state) => state.user.userid);

  const [fileName, setFileName] = React.useState("선택한 파일이 없습니다");
  const fileInput = React.useRef();

  const selectFile = (e) => {
    const reader = new FileReader();
    const currentFile = fileInput.current.files[0];
    setFileName(currentFile.name);
    reader.readAsDataURL(currentFile);
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
      console.log(fileInput.current.files[0]);
    };
  };

  const [comment_text, setCommentText] = useState();
  const [comment_title, setCommentTitle] = useState();

  const preview = useSelector((state) => state.image?.preview);
  const product_data = useSelector((state) => state.post.list);
  console.log(product_data);

  const onChange = (e) => {
    setCommentText(e.target.value);
  };
  const onChangeTitle = (e) => {
    setCommentTitle(e.target.value);
  };

  const addcomment = () => {
    // dispatch(commentActions.addCommentFB(pid, comment_title, comment_text))
    dispatch(
      commentActions.addCommentFB(
        userId,
        productId,
        comment_title,
        comment_text
        // fileInput.current.files[0]
      )
    );
  };

  const comment_list = useSelector((state) => state.comment.list);
  console.log(comment_list);

  useEffect(() => {
    dispatch(commentActions.getCommentFB());
  }, []);

  return (
    <CommentWriteWrap>
      <div>
        <input type="text" placeholder="댓글 제목" onChange={onChangeTitle} />
      </div>
      <div>
        <textarea
          onChange={onChange}
          name="comment"
          cols="30"
          rows="10"
          placeholder="댓글 내용 작성하자"
        />
      </div>
      <div className="detail-image">
        <img
          src={
            preview
              ? preview
              : "https://firebasestorage.googleapis.com/v0/b/project-week3-9a157.appspot.com/o/images%2Fpicture.svg?alt=media&token=45418417-5864-4e67-a034-9f790ceab4e6"
          }
          alt="test"
        />
      </div>
      <StyleUpload>
        <div className="upload-layer">
          <span className="upload-layer-file">{fileName}</span>
          <label>
            <span className="upload-layer-btn">+</span>
            <input
              type="file"
              onChange={selectFile}
              ref={fileInput}
              // disabled={uploading}
            />
          </label>
        </div>
      </StyleUpload>
      <div>
        <button onClick={addcomment}>작성하기</button>
      </div>

      <CommentList comment_list={comment_list} />
    </CommentWriteWrap>
  );
};

const CommentWriteWrap = styled.div`
  text-align: center;
`;

const StyleUpload = styled.div`
  .upload-layer {
    margin: 0 auto;
    display: flex;
    width: 30rem;
    border: 1px solid #dddddd;

    .upload-layer-file {
      padding: 1rem;
      flex-basis: calc(100% - 5rem);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    label {
      padding: 1rem;
      flex-basis: 8rem;
      text-align: center;
      border-left: 1px solid #dddddd;
      border-radius: 0 0.5rem 0.5rem 0;
      cursor: pointer;
      &:hover {
        color: #ffffff;
        background-color: #000000;
      }
    }
  }
  input {
    display: none;
    opacity: 0;
  }
`;

export default CommentWrite;
