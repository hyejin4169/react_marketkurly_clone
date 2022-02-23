import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Comment from "./Comment";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useNavigate } from "react-router-dom";

const CommentList = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { comment_list } = props;
  // const comment_list = useSelector((state) => state.comment.list);
  const islogin = useSelector((state) => state.user.is_login);

  useEffect(() => {
    dispatch(commentActions.getCommentFB(props.pid));
  }, []);

  return (
    <>
      <CommentListWrap>
        <CommentBanner>후기 ({comment_list.length})</CommentBanner>
        <CommentListTitle>PRODUCT REVIEW</CommentListTitle>
        <CommentListInfo>
          <li>
            <div
              style={{
                width: "4px",
                height: "4px",
                margin: "7px 8px 0 0",
                backgroundColor: "#514859",
                verticalAlign: "2px",
              }}
            ></div>
            상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은
            사전동의 없이 담당 게시판으로 이동될 수 있습니다.
          </li>
          <li>
            <div
              style={{
                width: "4px",
                height: "4px",
                margin: "7px 8px 0 0",
                backgroundColor: "#514859",
                verticalAlign: "2px",
              }}
            ></div>
            배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내
            1:1 문의에 남겨주세요.
          </li>
        </CommentListInfo>
        <TableHeader>
          <HeaderInfo>
            <Info
              style={{
                width: "70px",
                textAlign: "center",
              }}
            >
              번호
            </Info>
            <Info
              style={{
                width: "592px",
                textAlign: "center",
              }}
            >
              제목
            </Info>
            <Info
              style={{
                width: "51px",
                textAlign: "center",
              }}
            ></Info>
            <Info
              style={{
                width: "77px",
                textAlign: "left",
              }}
            >
              작성자
            </Info>
            <Info
              style={{
                width: "100px",
                textAlign: "center",
              }}
            >
              작성일
            </Info>
            <Info
              style={{
                width: "40px",
                textAlign: "center",
              }}
            >
              도움
            </Info>
            <Info
              style={{
                width: "80px",
                textAlign: "center",
              }}
            >
              조회
            </Info>
          </HeaderInfo>
          {/* Commnet List */}
          {comment_list &&
            comment_list.map((c, i) => {
              return <Comment key={i} {...c} />;
            })}
          <ButtonWrap>
            {islogin ? (
              <ReviewButton
                onClick={() => {
                  navigate(`/comment/write/${props.product_id}`);
                }}
              >
                후기쓰기
              </ReviewButton>
            ) : (
              <ReviewButton
                style={{
                  color: "#fff",
                  backgroundColor: "#eee",
                  border: "none",
                }}
                disabled
              >
                후기쓰기
              </ReviewButton>
            )}
          </ButtonWrap>
        </TableHeader>
      </CommentListWrap>
    </>
  );
};

const CommentListWrap = styled.div`
  margin: 100px auto;
  width: 1010px;
  min-height: 850px;
`;

const CommentBanner = styled.div`
  padding-top: 12px;
  height: 50px;
  margin: 0 auto 30px;
  box-sizing: border-box;
  width: 1010px;
  background-color: #fafafa;
  color: #5e0080;
  font-weight: 700;
`;

const CommentListTitle = styled.div`
  text-align: left;
  font-size: 13px;
  font-weight: 700;
  padding-bottom: 5px;
  margin: 0;
  color: #4c4c4c;
  letter-spacing: 0px;
`;

const CommentListInfo = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style-type: none;

  li {
    display: flex;
    color: #666;
    font-size: 12px;
    letter-spacing: 0px;
  }
`;

const TableHeader = styled.div`
  width: 100%;
  margin: 15px 0 0;
  color: #353535;
  font-size: 12px;
  line-height: 140%;
  table-layout: fixed;
  border-top: 2px solid #522772;
  font-weight: 400;
`;

const HeaderInfo = styled.div`
  /* width: 100%;
  height: 65.8px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid #e2e2e2; */
`;

const Info = styled.div`
  padding: 25px 0px 23px 0;
  line-height: 140%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

const ButtonWrap = styled.div`
  padding: 30px 0;
  text-align: right;
  width: 100%;
  display: table;
  border-top: 1px solid #6a3664;
  /* padding: 10px 0px;
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: flex-end;
  align-items: center; */
`;

const ReviewButton = styled.button`
  background-color: #785b8f;
  border: 1px solid #5e0080;
  padding: 0;
  width: 128px;
  height: 30px;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
  color: #fff;
  cursor: pointer;
  box-sizing: border-box;
`;

export default CommentList;
