import styled from "styled-components";


export const StyledBtnFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`

type StyledBtnPropsType = {
    border?: string
    background: string
    color: string
    margin?: string
    marginl?: string
}
export const StyledBtn = styled.button<StyledBtnPropsType>`
  width: 86px;
  height: 30px;
  color: ${props => props.color};
  background-color: ${props => props.background};
  border-radius: 5px;
  border: ${props => props.border};
  font-size: 10px;
  font-weight: 700;
  margin: ${props => props.margin};
`