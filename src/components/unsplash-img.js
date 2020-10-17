import React from 'react';
import styled from "styled-components";

const   Img = styled.img`
width:100%;
hight:100%;
object-fit:cover;
`;

function unsplashImg(props){
    return <Img src={props.url}  key={props.key} alt=""/>
}
export default unsplashImg;