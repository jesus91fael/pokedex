import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { api } from "../../lib/axios";
import { ModalProps } from "./interface";
import {
  AbilitiesStyled,
  IconStyled,
  ImageStyled,
  ModalContentDetailStyled,
  ModalContentImageStyled,
  ModalContentInfoStyled,
  ModalContentStats,
  ModalContentStatsContent,
  ModalContentStatslineStyled,
  ModalContentStyled,
  ModalContentTypeSdtyled,
  ModalContentWeaknesses,
  Orderstyled,
  StatusStyled,
  TitleAbilitiesStyled,
  TitleContentStyled,
  TitleModalContentStyled,
  TitleStyled,
  TypeStyled,
  ValueAbilitiesStyled,
} from "./styles";
import { useTheme } from 'styled-components';
import iconTypePokemon from '../../assets/types';

const ModalInfo = ({ isOpen, handleClose, name }: ModalProps) => {

  const { colors } = useTheme();

  const [pokemon, setPokemon] = useState<any>({
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


        setPokemon({
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
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <TitleModalContentStyled>
            <TitleStyled>{pokemon.name}</TitleStyled>{" "}
            <Orderstyled>#{pokemon.order}</Orderstyled>
          </TitleModalContentStyled>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalContentStyled>
          <ModalContentImageStyled color={pokemon.color}>
            <ImageStyled src={pokemon?.image} alt={pokemon?.name} />
          </ModalContentImageStyled>
          <ModalContentInfoStyled>
            <ModalContentTypeSdtyled>
              
              {pokemon?.types.map((element: any, index: number) => {
                return <TypeStyled key={index} color={element.color}><IconStyled>{element.icon}</IconStyled>{element.name}</TypeStyled>;
              })}
            </ModalContentTypeSdtyled>
            <ModalContentDetailStyled>
              <span>
                <TitleContentStyled>Height</TitleContentStyled>
                {pokemon?.height / 10}m
              </span>
              <span>
                <TitleContentStyled>Weight</TitleContentStyled>
                {pokemon.weight / 10}Kg
              </span>
              <span>
                <TitleContentStyled>abilities</TitleContentStyled>
                <select>
                  {pokemon?.abilities.map((element: any, index: number) => {
                    return <option key={index}>{element.ability.name}</option>;
                  })}
                </select>
              </span>
            </ModalContentDetailStyled>
            <ModalContentWeaknesses></ModalContentWeaknesses>

            <ModalContentStats>
              <StatusStyled>Status</StatusStyled>
              {pokemon?.stats?.map((element: any, index: number) => {
                return (
                  <ModalContentStatsContent key={index}>
                    <TitleAbilitiesStyled>
                      {element.stat.name}
                    </TitleAbilitiesStyled>
                    <AbilitiesStyled>
                      <ModalContentStatslineStyled color={pokemon.color} size={element.base_stat} />
                      <ValueAbilitiesStyled>
                        {element.base_stat}
                      </ValueAbilitiesStyled>
                    </AbilitiesStyled>
                  </ModalContentStatsContent>
                );
              })}
            </ModalContentStats>
          </ModalContentInfoStyled>
        </ModalContentStyled>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalInfo;
