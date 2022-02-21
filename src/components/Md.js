import React from 'react';
import styled from "styled-components";
import Slide from './Slide';

const Md = () => {


    return (
        <Wrap>
            <TitleWrap>
                <span>MD의 추천</span>
            </TitleWrap>
            <Category>
                <li>채소</li>
                <li>과일·견과·쌀</li>
                <li>수산·해산·건어물</li>
                <li>정육·계란</li>
            </Category>

            <Slide></Slide>
        </Wrap>
    );
};

const Wrap = styled.div`
    padding: 32px 0px 40px;

`

const TitleWrap = styled.div`
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 8px;
    & span {
        color: rgb(51, 51, 51);
        font-size: 28px;
        line-height: 1.15;
        letter-spacing: -0.26px;
        font-weight: 600; 
    }
`
const Category = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    place-content: center;
    & li {
        display: block;
        padding: 5px 20px;
        border-radius: 22px;
        margin: 0px 5px 20px;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        background-color: rgb(247, 247, 247);
        color: rgb(51, 51, 51);  
    }

`

export default Md;