import React from "react";
import styled from "styled-components";

const StyledNavBtn = styled.button`
    background-color: #333;
    color: white;
    padding: 10px 30px;
    font-size: 16px;
    width: 150px;
    height: 59px;
    border: none;
    cursor: pointer;
`;

function NavBtn(props) {
    const {title, onClick} = props;

    return <StyledNavBtn onClick={onClick}>{title}</StyledNavBtn>;
}

export default NavBtn;