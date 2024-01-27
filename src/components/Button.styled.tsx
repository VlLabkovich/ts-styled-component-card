import styled, {css} from "styled-components";

export const StyledBtnFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 0 10px;
`

type StyledBtnPropsType = {
    btnType: "primary" | "secondary"
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 700;

    // primary
    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
        background-color: #4E71FE ;
        color: #FFF;
        border: 0;

        &:hover {
            background-color: #64ce94;
        }
    `
    };
    
    // secondary
    ${props => props.btnType === "secondary" && css<StyledBtnPropsType>`
        background-color: #FFF;
        color: #4E71FE;
        border: 2px solid #4E71FE;
        
        &:hover {
            border-color: #64ce94;
            color: #64ce94;
        }
    `
    };
`