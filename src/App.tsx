import React from 'react';
import logo from './logo.svg';
import './App.css';
import {StyledCard} from "./components/Card.styled";
import {CardImg} from "./components/Img.styled";
import {Container} from "./components/Container.styled";
import {StyledTitle} from "./components/Title.Styled";
import {StyledP} from "./components/P.Styled";
import {StyledBtnFlex, StyledBtn} from "./components/Button.styled"




function App() {
    return (
        <div className="App">
            <Container>
                <StyledCard>
                    <CardImg top={"10px"} right={'10px'} left={"10px"}></CardImg>
                    <StyledTitle>Headline</StyledTitle>
                    <StyledP>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledP>
                    <StyledBtnFlex>
                        <StyledBtn background={"#4E71FE"} color={"#FFF"} border={"0"} margin={"0px 12px 22px 20px"}>See more</StyledBtn>
                        <StyledBtn background={"#FFF"} color={"#4E71FE"} border={"2px solid #4E71FE"} >Save</StyledBtn>
                    </StyledBtnFlex>
                </StyledCard>
            </Container>
        </div>
    );
}

export default App;