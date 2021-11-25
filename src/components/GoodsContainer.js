import React, {useLayoutEffect, useState} from "react";
import styled from "styled-components";


const GoodsContainer = (mycartitem) => {
    let cartData = mycartitem.sendProps;


    return (
        <>
            <CartContainer>
                <GoodsWrap>
                    <CartTable>
                        <colgroup>
                            <col style={{width: '60%'}} />
                            <col style={{width: 'auto'}}  />
                            <col style={{width: 'auto'}}  />
                        </colgroup>
                        <thead>
                        <tr>
                            <th scope="col">상품정보</th>
                            <th scope="col">상품금액</th>
                            <th scope="col">옵션</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            cartData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.goodsName}</td>
                                        <td>{item.goodsPrice}</td>
                                        <td>
                                            <button className="btnDel">삭제</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    </CartTable>
                </GoodsWrap>
            </CartContainer>
            <InputArea>
                <div className="addInput">
                    <input type="text"/>
                    <button className="btnAddCart" >추가</button>
                </div>
                <div className="saveCart">
                    <button className="btnSave">저장</button>
                </div>
            </InputArea>
        </>
    );
};

const CartContainer = styled.section`
  padding: 10px;
  background: url("https://img-shop.pstatic.net/cart/static/pc/20211124/130/image/bg_gheader-dfb78f0a7949946d6df903188605a630.jpg") repeat-y center;
  background-size:100% auto;
`;

const GoodsWrap = styled.div`
  background: #fff;
  padding:5px 10px;
`;

const CartTable = styled.table`
  width:100%;
  text-align:center;
  thead{
    th{
      height:30px;
      border-bottom:2px solid #222;
    }
  }
  td{
    padding:7px;
    border-left:1px solid #d3d3d3;
    border-bottom:1px solid #d3d3d3;
    &:first-child{border-left:none;}
  }
`;

const InputArea = styled.div`
  margin-top:10px;
  .addInput{
    padding:10px 5px;
    display: flex;
    justify-content: space-between;
    background:#f3f3f3;
    input{display:inline-block;width:calc(100% - 60px);height:30px;border:1px solid #d3d3d3;box-sizing: border-box;}
    .btnAddCart{display:inline-block;width:50px;height:30px;border:1px solid #d3d3d3;box-sizing: border-box;cursor:pointer;}
  }
  .saveCart{
    
    margin-top:7px;
    padding:0 5px;
    text-align: center;    
    button{display:inline-block;width:50px;height:35px;border:1px solid #d3d3d3;box-sizing: border-box;cursor:pointer;}
  }
`

export default GoodsContainer;