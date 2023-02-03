
import styled from "styled-components"

export const TitleStyled = styled.h1`
  font-weight: 800;
  text-transform: uppercase;
  font-size: 26px;

`

export const ModalContentStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  align-items: center;
  justify-content: center;
`

export const ModalContentStatslineStyled = styled.div`
  width: ${(props) => props.color || 0}%;
  border: 1px solid red;
`

export const ModalContentStatsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export const ModalContentDetailStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between ;
`

export const ModalContentWeaknesses = styled.div`
  display: flex;
`

export const ModalContentStats = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Orderstyled = styled.h6`
  color: #7c7c7c;
  font-size: 14px;
  margin-left: 10px;
`

export const TitleContentStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`