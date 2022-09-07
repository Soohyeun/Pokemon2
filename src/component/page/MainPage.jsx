import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import PokeCard from "../ui/PokeCard";
import SearchBar from "../ui/SearchBar";

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
    <>
    <SearchBar></SearchBar>
    <Wrapper>
      {pokeInfo.map((data, index) => {

        let this_hp = data.stats.filter((obj1) => {
          // eslint-disable-next-line eqeqeq
          return obj1.stat.name == "hp"
        }).map((obj2) => {
          return obj2.base_stat
        })
        let this_types = data.types.map((obj3) => {
          return obj3.type.name
        })

        return (
          <PokeCard
            key={index}
            id={data.id}
            name={data.name}
            image={data.sprites.other["official-artwork"].front_default}
            types={this_types}
            hp={this_hp[0]}
            weight={data.weight}
            height={data.height}
          />
        );
      })}
    </Wrapper>
    </>
    
  );
}
export default MainPage;
