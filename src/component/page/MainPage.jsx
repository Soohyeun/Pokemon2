import React from "react";
import styled from "styled-components";
import PokeCard from "../ui/PokeCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ContainerRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

function MainPage(props) {
    return (
        <Wrapper>
            <ContainerRow>
                <PokeCard
                    name="ferroseed"
                    image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
                    type="grass"
                />
                <PokeCard
                    name="ferroseed"
                    image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
                    type="grass"
                />
                <PokeCard
                    name="ferroseed"
                    image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
                    type="grass"
                />
            </ContainerRow>
            <ContainerRow>
                <PokeCard
                    name="ferroseed"
                    image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
                    type="grass"
                />
                <PokeCard
                    name="ferroseed"
                    image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
                    type="grass"
                />
                <PokeCard
                    name="ferroseed"
                    image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
                    type="grass"
                />
            </ContainerRow>
            <ContainerRow>
                <PokeCard
                    name="ferroseed"
                    image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
                    type="grass"
                />
                <PokeCard
                    name="ferroseed"
                    image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
                    type="grass"
                />
                <PokeCard
                    name="ferroseed"
                    image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
                    type="grass"
                />
            </ContainerRow>
        </Wrapper>
    );
}
export default MainPage;
