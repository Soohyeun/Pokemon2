import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

function SearchPage(props) {
  const { searchType, thisPoke } = useParams();
  const [pokeList, setPokeList] = useState([]);
  const [pokeInfo, setPokeInfo] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  async function searchByType(pokeType) {
    var temp = [];
    await axios
      .get(`https://pokeapi.co/api/v2/type/${pokeType}`)
      .then((response) => {
        temp = response.data.pokemon.map((obj) => {
          return obj.pokemon.name;
        });
        getPokeInfo(temp);
      });
    setPokeList(temp);
  }

  async function searchByColour(pokeColour) {
    var temp = [];
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon-color/${pokeColour}`)
      .then((response) => {
        temp = response.data.pokemon_species.map((obj) => {
          return obj.name;
        });
        getPokeInfo(temp);
      });
    setPokeList(temp);
  }

  async function getPokeInfo(info) {
    const temp = [];
    for (let i = pageNum - 1; (i < pageNum + 8) && (i < info.length); i++) {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${info[i]}`)
        .then((response) => {
          temp.push(response.data);
        });
    }
    setPokeInfo(temp);
  }

  useEffect(() => {
    if (searchType == "type") {
      searchByType(thisPoke);
    }
    if (searchType == "colour") {
      searchByColour(thisPoke);
    }
    if (searchType == "name") {
      const tempPokeList = [];
      tempPokeList.push(thisPoke.toLowerCase())
      setPokeList(tempPokeList);
      getPokeInfo(tempPokeList);
    }
  }, [searchType, thisPoke]);

  console.log(pokeInfo);
  console.log(pokeList);
  return (
    <>
      <SearchBar></SearchBar>
      <Wrapper>
        {pokeInfo.map((data, index) => {
          let this_hp = data.stats
            .filter((obj1) => {
              // eslint-disable-next-line eqeqeq
              return obj1.stat.name == "hp";
            })
            .map((obj2) => {
              return obj2.base_stat;
            });
          let this_types = data.types.map((obj3) => {
            return obj3.type.name;
          });

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
export default SearchPage;
