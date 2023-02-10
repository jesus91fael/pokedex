import styled from "styled-components"
interface BoxProps {
  color?: string;
  size?: string
}
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
  @media (max-width: 400px) {
    flex-direction: column;
  }
`

export const ModalContentImageStyled = styled.div<BoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
	height: 200px;
	border-radius: 50%;
  background: ${props => props.color};
  @media (max-width: 400px) {
    margin-bottom: 20px ;
  }
`

export const ImageStyled = styled.img`
  width: 120px;
  max-height: 120px;
`

export const ModalContentInfoStyled = styled.div`
  width: 70%;
  margin-left: 10px;
  @media (max-width: 400px) {
    width: 100%;
    margin-left: 0px;
  }
`

export const ModalContentTypeSdtyled = styled.div`
  display: flex;
  @media (max-width: 400px) {
    width: 100%;
    justify-content: center;
  }
`

export const TypeStyled = styled.span`
  background-color: rgba(0, 0, 0, 0.3) ;
  padding: 2px 8px ;
  border-radius: 6px;
  margin: 0 4px 0 0;
  background: ${props => props.color};
  color: ${({ theme }) => theme.colors.text.white}
`

export const IconStyled = styled.span`
  margin-right: 5px;
  svg {
      width: 16px;
      height: 16px;
      path {
        fill: ${({ theme }) => theme.colors.text.white};
      }
    }
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

export const ModalContentStatslineStyled = styled.div<BoxProps>`
  width: ${(props) => props.size || 0}%;
  background-color: ${props => props.color}; 
  border: 1px solid ${props => props.color};
  height: 5px;
  margin: 2px 0 ;
`

export const ValueAbilitiesStyled = styled.span`
  margin-left: 5px;
`
