import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import PokeCard from "../ui/PokeCard";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  perspective: 1000px;
`;

// const ContainerRow = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 25%;
// `;

function MainPage(props) {
  const [pokeInfo, setPokeInfo] = useState([]);

  async function getPokeInfo() {
    const temp = [];
    for (let i = 0; i < 9; i++) {
      let random_number = Math.floor(Math.random() * 800) + 1;
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${random_number}`)
        .then((response) => {
          temp.push(response.data);
        });
    }
    setPokeInfo(temp);
  }

  useEffect(() => {
    getPokeInfo();
  }, []);

  console.log(pokeInfo);

  return (
    <Wrapper>
      {pokeInfo.map((data, index) => {
        return (
          <PokeCard
            key={index}
            name={data.name}
            image={data.sprites.other["official-artwork"].front_default}
            type={data.types[0].type.name}
          />
        );
      })}
    </Wrapper>
  );
}
export default MainPage;
