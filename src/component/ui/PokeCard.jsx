import React from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

const StyledCard = styled.div`
  border: #333 solid 1.5px;
  border-radius: 15px;
  padding: 30px 0px 20px 0px;
  margin: 30px 0;
  text-align: center;
  width: 28%;
`;

const StyledFront = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledBack = styled.div`
  width: 100%;
  height: 100%;
`;

const typeColour = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eceda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  dark: "#A9A9A9",
  ghost: "#DCDCDC",
  ice: "#F5FFFA",
  steel: "#708090",
};

function PokeCard(props) {
  const { name, image, type } = props;
  const [flip, setFlip] = useState(false);

  return (
    <StyledCard
      style={{ backgroundColor: typeColour[type] }}
      onClick={() => {setFlip(!flip)}}
    >
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <StyledFront>
          <img src={image} alt={name} style={{ width: "100%" }} />
          <h4>{name}</h4>
        </StyledFront>

        <StyledBack>
          <h4>{name}</h4>
        </StyledBack>
      </ReactCardFlip>
    </StyledCard>
  );
}

export default PokeCard;
