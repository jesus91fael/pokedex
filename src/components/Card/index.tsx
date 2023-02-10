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
import { useTheme } from 'styled-components';
import iconTypePokemon from '../../assets/types';

const Card = ({ name }: CardProps) => {
  const [pokemon, setPokemon] = useState<any>({
    name: "",
    order: 0,
    image: "",
  });

  useEffect(() => {
    api
      .get(`/pokemon/${name}`)
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

  const { colors } = useTheme();

  const [pokemonIndividual, setPokemonIndividual] = useState<any>({
    name: "",
    order: 0,
    image: "",
    types: [],
    height: 0,
    weight: 0,
    abilities: [],
    stats: [],
  });

  useEffect(() => {
    api
      .get(`/pokemon/${name}`)
      .then((response: any) => {
        let backgroundColor: keyof typeof iconTypePokemon = response?.data.types[0].type.name
        if (backgroundColor === 'normal' && response?.data.types.length > 1) {
          backgroundColor = response?.data.types[0].type.name;
        }


        setPokemonIndividual({
          name: response.data.name,
          order: response.data.order,
          image: response.data.sprites.other.dream_world.front_default,
          types: response?.data?.types.map((pokemonType: any) => {
            const typeName = pokemonType.type.name as keyof typeof iconTypePokemon;
            return {
              name: typeName,
              icon: iconTypePokemon[typeName],
              color: colors.type[typeName],
            };
          }),
          height: response.data.height,
          weight: response.data.weight,
          abilities: response.data.abilities,
          stats: response?.data?.stats,       
          color: colors.backgroundType[backgroundColor]
        })}
      )
      .catch((err: any) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [name, colors.backgroundType, colors.type]);

  return (
    <CardStyled>
      <CardInfoStyled>
        <CardImageStyled color={pokemonIndividual.color}>
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
