import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import NavBtn from "./NavBtn";

const StyledNav = styled.nav`
  background-color: #333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function NavBar(props) {
  const navigate = useNavigate();

  return (
    <StyledNav>
      <NavBtn
        title="Home"
        onClick={() => {
          navigate("/");
        }}
      />

      {/* Todo: Change the paths!! */}
      <NavBtn
        title="Game"
        onClick={() => {
          console.log("game");
          navigate("/");
        }}
      />
      <NavBtn
        title="Cart"
        onClick={() => {
          console.log("cart");
          navigate("/");
        }}
      />
      <NavBtn
        title="Profile"
        onClick={() => {
          console.log("profile");
          navigate("/");
        }}
      />
      <NavBtn
        title="Login"
        onClick={() => {
          console.log("Login");
          navigate("/");
        }}
      />
    </StyledNav>
  );
}

export default NavBar;
