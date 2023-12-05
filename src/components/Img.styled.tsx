import styled from "styled-components";
import cardimg from "../assets/images/pic.png"

type StyledImgPropsType = {
    top: string
    right: string
    bottom?: string
    left: string
}

const StyledImg = styled.img<StyledImgPropsType>`
  width: 280px;
  height: 170px;
  background: url(${cardimg});
  border-radius: 10px;
  margin-top: ${props => props.top};
  margin-right: ${props => props.right} ;
  margin-bottom: ${props => props.bottom} ;
  margin-left: ${props => props.left} ;
`

export const CardImg = (props: StyledImgPropsType) => {
    return <StyledImg {...props} />
}