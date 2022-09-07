import React from "react";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { ButtonGroup, InputGroup, Form, Button } from "react-bootstrap";

function SearchBar(props) {
  return (
    <>
      <DropdownButton as={ButtonGroup} id="dropdown_type" variant="secondary" title="Type">
        <Dropdown.Item href="#">grass</Dropdown.Item>
        <Dropdown.Item href="#">ground</Dropdown.Item>
        <Dropdown.Item href="#">bug</Dropdown.Item>
        <Dropdown.Item href="#">dark</Dropdown.Item>
        <Dropdown.Item href="#">dragon</Dropdown.Item>
        <Dropdown.Item href="#">electric</Dropdown.Item>
        <Dropdown.Item href="#">fairy</Dropdown.Item>
        <Dropdown.Item href="#">fighting</Dropdown.Item>
        <Dropdown.Item href="#">fire</Dropdown.Item>
        <Dropdown.Item href="#">flying</Dropdown.Item>
        <Dropdown.Item href="#">ghost</Dropdown.Item>
        <Dropdown.Item href="#">ice</Dropdown.Item>
        <Dropdown.Item href="#">normal</Dropdown.Item>
        <Dropdown.Item href="#">poison</Dropdown.Item>
        <Dropdown.Item href="#">psychic</Dropdown.Item>
        <Dropdown.Item href="#">rock</Dropdown.Item>
        <Dropdown.Item href="#">steel</Dropdown.Item>
        <Dropdown.Item href="#">water</Dropdown.Item>
      </DropdownButton>
      <DropdownButton as={ButtonGroup}  id="dropdown_colour" variant="secondary" title="Colour">
        <Dropdown.Item href="#">black</Dropdown.Item>
        <Dropdown.Item href="#">blue</Dropdown.Item>
        <Dropdown.Item href="#">brown</Dropdown.Item>
        <Dropdown.Item href="#">gray</Dropdown.Item>
        <Dropdown.Item href="#">green</Dropdown.Item>
        <Dropdown.Item href="#">pink</Dropdown.Item>
        <Dropdown.Item href="#">purple</Dropdown.Item>
        <Dropdown.Item href="#">red</Dropdown.Item>
        <Dropdown.Item href="#">white</Dropdown.Item>
        <Dropdown.Item href="#">yellow</Dropdown.Item>
      </DropdownButton>
      <InputGroup>
        <Form.Control
          placeholder="Name or ID"
          aria-label="Name or ID"
        />
        <Button variant="outline-secondary">Button</Button>
      </InputGroup>


    </>
  );
}

export default SearchBar;
