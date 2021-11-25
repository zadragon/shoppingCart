import './App.css';
import React, {useLayoutEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from 'axios';

import GoodsContainer from "./components/GoodsContainer";

const cartList = {
    data: [
        {
            goodsName: "[밤보]밤보그린 친환경 유럽 밤 기저귀 전 단계 1박스 밴드/팬티(1~6단계) 목튜브 무료",
            goodsPrice: 6000
        },
        {
            goodsName: "책장변신 나스파 유아용 실내 원목 미끄럼틀 네추럴 어린이 남아 여아 선물",
            goodsPrice: 50000
        },
        {
            goodsName: "지아지조GYM 실내놀이터 원목미끄럼틀",
            goodsPrice: 105000
        }
    ]
}





function App() {
    return (
        <Wrapper>
            <Logo>title</Logo>
            <GoodsContainer sendProps={cartList.data}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: 0 5px;
`
const Logo = styled.h1`
  padding: 5px 10px;
`;

export default App;
