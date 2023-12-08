import React from 'react';
import './App.css';
import {StyledBtnFlex, StyledBtn} from "./components/Button.styled"
import styled from "styled-components";
import pic from './assets/images/pic.png'

function App() {
    return (
        <div className="App">
            <CardContainer>
                <StyledCard>
                    <StyledImg src={pic}></StyledImg>
                    <StyledTitle>Headline</StyledTitle>
                    <StyledP>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                        venen.</StyledP>
                    <StyledBtnFlex>
                        <StyledBtn background={"#4E71FE"} color={"#FFF"} border={"0"} margin={"0px 12px 22px 20px"}>See
                            more</StyledBtn>
                        <StyledBtn background={"#FFF"} color={"#4E71FE"} border={"2px solid #4E71FE"}>Save</StyledBtn>
                    </StyledBtnFlex>
                </StyledCard>
            </CardContainer>
        </div>
    );
}

export default App;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
  height: 100vh;
`

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  min-height: 350px;
  border-radius: 15px;
  background-color: #FFF;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
  border: 0;
`
const StyledTitle = styled.h2`
  color: black;
  font-size: 16px;
  font-weight: 700;
  margin: 20px 210px 20px 20px;
`
const StyledP = styled.p`
  color: #ABB3BA;
  font-size: 12px;
  font-weight: 500;
  margin: 0px 20px 23px 20px;
`
const StyledImg = styled.img`
  width: 100%;
  padding: 10px 10px 0px 10px;
`