import styled, {css} from "styled-components";

export const StyledBtnFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

type StyledBtnPropsType = {
    background: string
    color: string
    btnType: "primary" | "outlined"
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  width: 86px;
  height: 30px;
  color: ${props => props.color};
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  flex-shrink: 0;
  
  // primary
  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    background-color: ${props => props.background};
    border: 0;

    &:hover {
      background-color: #64ce94;
    }
  `
  };
  // outlined
  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    background-color: ${props => props.background};
    border: 2px solid #4E71FE;

    &:hover {
      border-color: #64ce94;
      color: #64ce94;
    }
  `
  };
`