import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownButton, ButtonGroup, Button } from "react-bootstrap";

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.div`
  display: flex;
  align-items: center;
`;

function SearchBar(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  return (
    <StyledSearchBar>
      {/* Search by type */}
      <DropdownButton
        as={ButtonGroup}
        id="dropdown_type"
        variant="secondary"
        title="Type"
        style={{ margin: 15 }}
        onSelect={(eventKey) => {
          navigate(`/search/type/${eventKey}`);
        }}
      >
        <Dropdown.Item eventKey="grass">grass</Dropdown.Item>
        <Dropdown.Item eventKey="ground">ground</Dropdown.Item>
        <Dropdown.Item eventKey="bug">bug</Dropdown.Item>
        <Dropdown.Item eventKey="dark">dark</Dropdown.Item>
        <Dropdown.Item eventKey="dragon">dragon</Dropdown.Item>
        <Dropdown.Item eventKey="electric">electric</Dropdown.Item>
        <Dropdown.Item eventKey="fairy">fairy</Dropdown.Item>
        <Dropdown.Item eventKey="fire">fire</Dropdown.Item>
        <Dropdown.Item eventKey="flying">flying</Dropdown.Item>
        <Dropdown.Item eventKey="ghost">ghost</Dropdown.Item>
        <Dropdown.Item eventKey="ice">ice</Dropdown.Item>
        <Dropdown.Item eventKey="normal">normal</Dropdown.Item>
        <Dropdown.Item eventKey="poison">poison</Dropdown.Item>
        <Dropdown.Item eventKey="psychic">psychic</Dropdown.Item>
        <Dropdown.Item eventKey="rock">rock</Dropdown.Item>
        <Dropdown.Item eventKey="steel">steel</Dropdown.Item>
        <Dropdown.Item eventKey="water">water</Dropdown.Item>
      </DropdownButton>

      {/* Search by colour */}
      <DropdownButton
        as={ButtonGroup}
        id="dropdown_colour"
        variant="secondary"
        title="Colour"
        style={{ margin: 15 }}
        onSelect={(eventKey) => {
          navigate(`/search/colour/${eventKey}`);
        }}
      >
        <Dropdown.Item eventKey="black">black</Dropdown.Item>
        <Dropdown.Item eventKey="blue">blue</Dropdown.Item>
        <Dropdown.Item eventKey="brown">brown</Dropdown.Item>
        <Dropdown.Item eventKey="gray">gray</Dropdown.Item>
        <Dropdown.Item eventKey="green">green</Dropdown.Item>
        <Dropdown.Item eventKey="pink">pink</Dropdown.Item>
        <Dropdown.Item eventKey="purple">purple</Dropdown.Item>
        <Dropdown.Item eventKey="red">red</Dropdown.Item>
        <Dropdown.Item eventKey="white">white</Dropdown.Item>
        <Dropdown.Item eventKey="yellow">yellow</Dropdown.Item>
      </DropdownButton>

      {/* Search by name or id */}
      <StyledInput>
        <input
          type="text"
          placeholder="Enter name or id"
          onChange={(event) => {
            setName(event.target.value);
          }}
          style={{ height: 38 }}
        />
        <Button
          onClick={() => {
            navigate(`/search/name/${name}`);
          }}
          style={{ marginLeft: 10 }}
          variant="secondary"
        >
          Search
        </Button>
      </StyledInput>
    </StyledSearchBar>
  );
}

export default SearchBar;
