import styled from "styled-components"

export const CardStyled = styled.div`
  background-color: #FFF ;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items:  center;
  justify-content: flex-start;
  margin: 10px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 1.9);
  }
`

export const CardImageStyled = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items:  center;
  justify-content: center;
  padding: 10px;
  //colocar cor de acordo com o tipo
  background-color: purple;
  border-radius: 5px 5px 0 0;

`

export const CardInfoStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const CardInfoTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
`

export const CardDetailsStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const TextNameStyled = styled.h5`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2px;
  font-size: 16px;
  text-transform: uppercase;
`
export const TextIdStyled = styled.h6`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2px;
  color: #7c7c7c;
  font-size: 14px;

`

export const CardInfoType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`