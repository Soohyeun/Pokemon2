import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import NavBar from "./component/ui/NavBar";
import Main from "./component/page/Main"

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>Pokemon Page</MainTitleText>
      <NavBar />      
      <Routes>
        <Route index element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
