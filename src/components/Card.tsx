import React from 'react';
import {StyledTitle} from "./StyledTitle"
import {StyledText} from "./StyledText"
import {StyledImg} from "./StyledImg";
import {StyledBtn, StyledBtnFlex} from "./Button.styled";
import {StyledCard} from "./StyledCard";

type CardPropsType = {
    title: string
    text: string
    src: string
}

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <StyledImg src={props.src} alt="desert"/>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledText>{props.text}</StyledText>
            <StyledBtnFlex>
                <StyledBtn btnType={"primary"}>See more</StyledBtn>
                <StyledBtn btnType={"outlined"}>Save</StyledBtn>
            </StyledBtnFlex>
        </StyledCard>
    );
};