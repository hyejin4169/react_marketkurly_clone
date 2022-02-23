import React from "react";
import styled from "styled-components";
import { Input, Text } from "../elements/element";

const CommentWrite = () => {
  return (
    <React.Fragment>
      <CommentContainer>
      <ReviewTitle>후기 작성</ReviewTitle>
      <Info>작성 시 유의 사항</Info>
      <Line />
      <ProductImg>
        <img src="http://img-cf.kurly.com/shop/data/goods/1637148022391s0.jpg" />
      </ProductImg>
      <ProductDesc>[KF365] 한돈 삼겹 대패 600g (냉동)</ProductDesc>
      <CommentTitleWrap>
        <CommentTitle style={{ height: "50px" }}>제목</CommentTitle>
        <CommentTitleBorder1>
          <CommentTitleInput placeholder="제목을 입력해주세요." />
        </CommentTitleBorder1>
      </CommentTitleWrap>

      <CommentTextWrap>
        <CommentTextTitle style={{ height: "272px" }}>
          후기작성
        </CommentTextTitle>
        <CommentTitleBorder2>
          <CommentTextInput
            placeholder="자세한 후기는 다른 고객의 구매에 많은 도움이 되며,
          일반식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성 시 검토 후 비공개 조치될 수 있습니다. 
          반품/환불 문의는 1:1문의로 가능합니다."
          />
        </CommentTitleBorder2>
        <CommentTitleBorder3 />
      </CommentTextWrap>

    <div>
      <CommentPhotoWrap>
        <CommentPhotoTitle style={{ height: "150px" }}>
          사진등록
        </CommentPhotoTitle>
        <PhotoUpload>
          {/* <input className="fileInput" type="file" accept="image/" /> */}
          <input type="file" name="file[]" class="file_upload" accept="image/x-png,image/gif,image/jpeg"></input>
        </PhotoUpload>
        <PhotoDesc>
          구매한 상품이 아니거나 캡쳐 사진을 첨부할 경우, 통보없이 삭제 및 적립
          헤택이 취소됩니다.
          <CommentTitleBorder4 />
        </PhotoDesc>
        {/* <CommentTitleBorder4 /> */}
      </CommentPhotoWrap>
      </div>
      
      <Issue>
        혹시 상품에 문제가 있으셨나요?
        <IssueSpan>1:1 문의하기</IssueSpan>
      </Issue>

        <Button>
        <Text color="#ffffff" size="16.5px" margin="1px 0 0 0">등록하기</Text>
        </Button>

      </CommentContainer>
    </React.Fragment>
  );
};

const ReviewTitle = styled.div`
  height: 36px;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #333;
  letter-spacing: -0.5px;
  display: flex;
  margin-left: 28px;
`;

const Info = styled.span`
  display: flex;
  justify-content: center;
  margin-left: 700px;
  top: -30px;
  padding-right: -20px;
  margin-bottom: 12px;
  font-size: 12px;
  color: #949296;
  line-height: 20px;
  background: url(https://res.kurly.com/pc/ico/1806/ico_question.png) no-repeat
    97% 5px;
`;

const Line = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: #5f0081;
  margin-top: -2px;
`;

const ProductImg = styled.div`
  /* float: left; */
  width: 80px;
  margin-left: 30px;
  margin-right: 32px;
  display: block;
  height: 52px;
  margin-top: 25px;
`;

const ProductDesc = styled.div`
  padding-top: 4px;
  display: flex;
  justify-content: center;
  margin-left: -190px;
  font-size: 16px;
  color: #000;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.01em;
`;

const CommentTitleWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CommentTitleBorder1 = styled.div`
  border-top: 1px solid #dddfe1;
  padding: 10px 0px 10px 10px;
  width: 710px;
  display: flex;
  margin-top: 112px;
`;

const CommentTitleBorder2 = styled.div`
  border-top: 1px solid #dddfe1;
  padding: 10px 0px 10px 10px;
  width: 660px;
  display: flex;
  margin-top: 130px;
`;

const CommentTitleBorder3 = styled.div`
  border-top: 1px solid #dddfe1;
  padding: 10px 0px 10px 10px;
  width: 670px;
  display: flex;
  margin-top: 331px;
  margin-left: -670px;
`;

const CommentTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
  width: 165px;
  height: 100%;
  border-top: 1px solid #dddfe1;
  background-color: #f7f7f7;
  font-size: 12px;
  color: #666;
`;

const CommentTitleInput = styled.input`
  display: flex;
  width: 100%;
  height: 34px;
  padding: 0 10px;
  border: 1px solid #dddfe1;
  font-size: 12px;
  color: #000;
  line-height: 18px;
  outline: none;
  margin-top: -4px;
`;

const CommentTextWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -133px;
`;

const CommentTextTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 39px;
  padding: 0 20 222px;
  width: 153px;
  height: 100%;
  border-top: 1px solid #dddfe1;
  background-color: #f7f7f7;
  font-size: 12px;
  color: #666;
  text-overflow: hidden;
  text-align: center;
`;

const CommentTextInput = styled.input`
  display: flex;
  width: 93%;
  height: 234px;
  padding: 0 10px;
  border: 1px solid #dddfe1;
  font-size: 12px;
  color: #000;
  line-height: 18px;
  outline: none;
  margin-top: 7px;
  margin-bottom: 100px;
`;

const CommentPhotoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -133px;
`;

const CommentPhotoTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 41px;
  padding: 0 20 222px;
  width: 234px;
  height: 100%;
  border-top: 1px solid #dddfe1;
  border-bottom: 1px solid #dddfe1;
  background-color: #f7f7f7;
  font-size: 12px;
  color: #666;
  text-overflow: hidden;
  text-align: center;
`;

const PhotoDesc = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0 10px;
  font-size: 12px;
  text-align: center;
  word-break: inherit;
  color: #666;
  line-height: 18px;
  outline: none;
  margin-top: 140px;
  margin-bottom: -60px;
  margin-left: 9px;
  

  /* padding-bottom: 10px;
    font-weight: 400;
    letter-spacing: 0;
    word-break: break-all;
    box-sizing: border-box;
    margin: 0;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    border-collapse: collapse;
    border-spacing: 0; */

`;

const PhotoUpload = styled.div`
  background: url(https://res.kurly.com/pc/ico/1806/img_add_thumb_x2.png)
    no-repeat 50% 50%;
  background-size: 14px 14px;
  /* position: relative; */
  /* float: left; */
  width: 80px;
  height: 80px;
  margin: 10px 0;
  border: 1px solid #dddfe1;
  margin: 10px;
  margin-top: 40px;
  padding-bottom: 10px;
  display: block;
`;

const CommentTitleBorder4 = styled.div`
  border-top: 1px solid #dddfe1;
  padding: 10px 0px 10px 10px;
  width: 677px;
  display: flex;
  justify-content: center;
  margin-top: 25.5px;
  margin-left: -600px;
`;

const Issue = styled.p`
  font-size: 12px;
  display: flex;
  margin-top: 20px;
  color: #949296;
`;

const IssueSpan = styled.span`
  color: #5f0081;
  background: url(https://res.kurly.com/pc/ico/1806/ico_arrow_12x20.png) no-repeat 100% 4px;
    background-size: 6px 10px;
  padding: 0 9px 0 5px;
`;

const Button = styled.button`
  margin: 40px auto;
  width: 20%;
  height: 54px;
  border-radius: 3px;
  border: 1px solid #5f0081;
  background-color: #5f0080;
  cursor: pointer;
  display: block;
  justify-content: center;
  overflow: hidden;
  text-align: center;
`;

const CommentContainer = styled.div`
  width: 820px;
  margin: 0 auto;
  padding: 0px 0px 60px 0px;
`;

export default CommentWrite;
