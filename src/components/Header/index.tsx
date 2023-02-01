import React from "react";
import { HeaderStyled, TitleStyled } from "./styles";
import { ReactComponent as PokedexIcon } from "../../assets/pokeball.svg"


const Header = () =>{
  return(
    <HeaderStyled>
      <PokedexIcon />
      <TitleStyled>Pokedex</TitleStyled>
    </HeaderStyled>
  )
}

export default Header
