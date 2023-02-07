import React, { useEffect, useState } from "react";
import {
  CardStyled,
  CardImageStyled,
  CardInfoStyled,
  CardInfoTitle,
  TextIdStyled,
  TextNameStyled,
  CardDetailsStyled,
  ImageStyled,
} from "./styles";
import { CardProps } from "./interface";
import { api } from "../../lib/axios";

const Card = ({ name }: CardProps) => {
  const [pokemon, setPokemon] = useState<any>({
    name: "",
    order: 0,
    image: "",
  });

  useEffect(() => {
    api
      .get(`/${name}`)
      .then((response: any) =>
        setPokemon({
          name: response.data.name,
          order: response.data.order,
          image: response.data.sprites?.other?.dream_world?.front_default,
        })
      )
      .catch((err: any) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [name]);

  return (
    <CardStyled>
      <CardInfoStyled>
        <CardImageStyled>
          <ImageStyled src={pokemon.image} alt={pokemon?.name} />
        </CardImageStyled>
      </CardInfoStyled>
      <CardDetailsStyled>
        <CardInfoTitle>
          <TextIdStyled>#{pokemon?.order}</TextIdStyled>
          <TextNameStyled>{pokemon?.name}</TextNameStyled>
        </CardInfoTitle>
      </CardDetailsStyled>
    </CardStyled>
  );
};

export default Card;
