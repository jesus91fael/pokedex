import styled from "styled-components"

export const PageStyled = styled.div`
  background-color: #FFF ;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:  center;
  justify-content: center;
  margin: 0 auto;
`

export const SearchContentstyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
  margin: 20px ;
`

export const SearchStyled = styled.input`
  background-color: #FFF ;
  border: 1px solid #181661 ;
  width: 300px;
  padding: 10px;
  border-radius: 8px;

  &:focus{
  border: 1px solid #e07f1f ;

  }
`

export const ListCardsStyled = styled.div`
  background-color: #FFF ;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items:  center;
  justify-content: center;
  flex-wrap: wrap;
`

export const ButtonStyled = styled.button`
  background-color: rgba(24, 2, 97, 1.9);
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  color: #FFF;
  margin: 20px 0;

  &:hover{
    background-color: rgba(68, 55, 122, 1.9);
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 1.9);
  }
`
