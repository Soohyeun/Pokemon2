import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import NavBar from "./component/ui/NavBar";
import MainPage from "./component/page/MainPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`;
function App() {
  return (
    <BrowserRouter>
      <MainTitleText>Pokemon Page</MainTitleText>
      <NavBar />
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
      <FooterText>© 2022 Pokemon Soo by React.js</FooterText>
    </BrowserRouter>
  );
}

export default App;
