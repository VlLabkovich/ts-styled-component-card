import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1170px; /*Не может быть максимум чем 1170px*/
  width: 100%; /*Чтобы растягивался на всю ширину*/
  padding: 0 15px;
  margin: 0 auto;
  //border: 1px solid red;
  height: 100vh;
  gap: 15px;
`
