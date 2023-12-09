import React from 'react';
import {StyledBtnFlex, StyledBtn} from "./components/Button.styled"
import styled from "styled-components";
import pic from './assets/images/pic.png'
import {myTheme} from "./styles/Theme.styled";

function App() {
    return (
        <div className="App">
            <CardContainer>
                <StyledCard>
                    <StyledImg src={pic}></StyledImg>
                    <StyledBox>
                        <StyledTitle>Headline</StyledTitle>
                        <StyledP>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                            venen.</StyledP>
                        <StyledBtnFlex>
                            <StyledBtn background={myTheme.primary} color={myTheme.secondary}
                                       btnType={"primary"}>See more</StyledBtn>
                            <StyledBtn background={myTheme.secondary} color={myTheme.primary}
                                       btnType={"outlined"}>Save</StyledBtn>
                        </StyledBtnFlex>
                    </StyledBox>
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
  padding: 10px 10px 10px 10px;
`

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`

const StyledTitle = styled.h2`
  color: black;
  font-size: 16px;
  font-weight: 700;
  margin: 20px 190px 20px 0;
`
const StyledP = styled.p`
  color: #ABB3BA;
  font-size: 12px;
  font-weight: 500;
  margin: 0 0 19px 0;
`
const StyledImg = styled.img`
  width: 100%;
`