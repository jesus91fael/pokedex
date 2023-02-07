import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { api } from "../../lib/axios";
import { ModalProps } from "./interface";
import {
  AbilitiesStyled,
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

const ModalInfo = ({ isOpen, handleClose, name }: ModalProps) => {
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
      .get(`/${name}`)
      .then((response: any) =>
        setPokemon({
          name: response.data.name,
          order: response.data.order,
          image: response.data.sprites.other.dream_world.front_default,
          types: response.data.types,
          height: response.data.height,
          weight: response.data.weight,
          abilities: response.data.abilities,
          stats: response.data.stats,
        })
      )
      .catch((err: any) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [name]);

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
          <ModalContentImageStyled>
            <ImageStyled src={pokemon?.image} alt={pokemon?.name} />
          </ModalContentImageStyled>
          <ModalContentInfoStyled>
            <ModalContentTypeSdtyled>
              {pokemon?.types.map((element: any, index: number) => {
                return <TypeStyled key={index}>{element.type.name}</TypeStyled>;
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
                      <ModalContentStatslineStyled color={element.base_stat} />
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
