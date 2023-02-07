import styled from "styled-components"

export const TitleStyled = styled.h1`
  font-weight: 800;
  text-transform: uppercase;
  font-size: 26px;
`

export const Orderstyled = styled.h6`
  color: #7c7c7c;
  font-size: 14px;
  margin-left: 10px;
`

export const ModalContentStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ModalContentImageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d6d6ff;
  width: 200px;
	height: 200px;
	border-radius: 50%;
`

export const ImageStyled = styled.img`
  width: 120px;
  max-height: 120px;
`

export const ModalContentInfoStyled = styled.div`
  width: 70%;
  margin-left: 10px;
`

export const ModalContentTypeSdtyled = styled.div`
  display: flex;
`

export const TypeStyled = styled.span`
  background-color: rgba(0, 0, 0, 0.3) ;
  padding: 2px 8px ;
  border-radius: 6px;
  margin: 0 4px 0 0;
`

export const ModalContentDetailStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between ;
`

export const TitleModalContentStyled = styled.div`
  font-weight: bold;
  width: 100%;
  display: flex;
  align-items: center;
`

export const TitleContentStyled = styled.h6`
  font-weight: bold;
  width: 100%;
  display: flex;
  margin-top: 10px;
`

export const ModalContentWeaknesses = styled.div`
  display: flex;
`

export const ModalContentStats = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const StatusStyled = styled.h6`
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

export const ModalContentStatsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const TitleAbilitiesStyled = styled.span`
  min-width: 40%;
  display: flex;
  justify-content: flex-end;
`

export const AbilitiesStyled = styled.span`
  min-width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5px ;
`

export const ModalContentStatslineStyled = styled.div`
  width: ${(props) => props.color || 0}%;
  background-color: red ;
  border: 1px solid red;
  height: 5px;
  margin: 2px 0 ;
`

export const ValueAbilitiesStyled = styled.span`
  margin-left: 5px;
`
