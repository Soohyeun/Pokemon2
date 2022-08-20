import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: #333 solid 1.5px;
  border-radius: 15px;
  padding: 30px 0px 20px 0px;
  margin: 30px 0;
  text-align: center;
`;

const typeColour = {
    "grass" : "#DEFDE0",
};

function PokeCard(props) {
    const {name, image, type} = props;

    return (
    <StyledCard style={{backgroundColor: typeColour[type]}}>
        <img src={image} alt={name} style={{width: "100%"}}/>
        <h4>{name}</h4>
    </StyledCard>)
}

export default PokeCard;