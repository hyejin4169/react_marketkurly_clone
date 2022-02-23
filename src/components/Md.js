import React from 'react';
import styled from "styled-components";
import Recommend from "./Recommend"
import settings from "./settings";
import Slider from "react-slick";
import Card from './Card';

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Md = () => {

    const dispatch = useDispatch();

    const [currentClick, setCurrentClick] = React.useState("list1");
    const [prevClick, setPrevClick] = React.useState(null);

    const GetClick = (e) => {
        setCurrentClick(e.target.id);
        const no = e.target.value;
        dispatch(postActions.getMdPostDB(no));
    };


    React.useEffect(
        (e) => {
            if (currentClick !== null) {
                let current = document.getElementById(currentClick);
                current.style.color = "rgb(255, 255, 255)";
                current.style.backgroundColor = "rgb(95, 0, 128)";

            }
            if (prevClick !== null) {
                let prev = document.getElementById(prevClick);
                prev.style.color = "rgb(51, 51, 51)";
                prev.style.backgroundColor = "rgb(247, 247, 247)";
            }
            setPrevClick(currentClick);
        },
        [currentClick]
    );

    React.useEffect(() => {
        dispatch(postActions.getMdPostDB());
    }, []);

    const md_list = useSelector((state) => state.post.list2)

    const all_list = useSelector((state) => state.post.list[2])

    return (
        <Wrap>
            <TitleWrap>
                <span>MD의 추천</span>
            </TitleWrap>
            <Category>
                <li id="list1" value={907} onClick={GetClick}>채소</li>
                <li id="list2" value={908} onClick={GetClick}>과일·견과·쌀</li>
                <li id="list3" value={909} onClick={GetClick}>수산·해산·건어물</li>
                <li id="list4" value={910} onClick={GetClick}>정육·계란</li>
            </Category>

            {
                (currentClick == "list1") ?
                    < Wrap >
                        <Slider {...settings}>
                            {all_list && all_list.map((data, i) => {
                                return (
                                    <Card key={i} data={data} />
                                );
                            })}
                        </Slider>
                    </Wrap >
                    :
                    <Recommend></Recommend>

            }


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
        padding: 0px 20px;
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