import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { api } from "../../lib/axios";
import { ModalProps } from "./interface";
import {
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
  TitleContentStyled,
  TitleStyled,
} from "./styles";

const ModalInfo = ({ isOpen, handleClose, name }: ModalProps) => {
  const [pokemon, setPokemon] = useState<any>({});

  useEffect(() => {
    api
      .get(`/${name}`)
      .then((response: any) => setPokemon(response.data))
      .catch((err: any) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [name]);

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <TitleContentStyled>
            <TitleStyled>{pokemon.name}</TitleStyled>{" "}
            <Orderstyled>#{pokemon.order}</Orderstyled>
          </TitleContentStyled>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalContentStyled>
          <ModalContentImageStyled>
            <ImageStyled
              src={pokemon?.sprites.other.dream_world.front_default}
              alt={pokemon?.name}
            />
          </ModalContentImageStyled>
          <ModalContentInfoStyled>
            <ModalContentTypeSdtyled>
              {pokemon?.types.map((element: any, index: number) =>{
              return(
                <span key={index}>{element.type.name}</span>
              )
            })}
            </ModalContentTypeSdtyled>
            <ModalContentDetailStyled>
            <span>Height<br/>{pokemon?.height/10}m</span>
            <span>Weight<br/>{pokemon.weight/10}Kg</span>
            <span>abilities<br/>
              <select>
              {pokemon?.abilities.map((element: any, index: number) =>{
                return(
                <option key={index}>{element.ability.name}</option>
          
              )})}
              </select>
            </span>
            </ModalContentDetailStyled>
            <ModalContentWeaknesses>

            </ModalContentWeaknesses>
            <ModalContentStats>
              {pokemon?.stats.map((element: any, index: number) =>{
                return(        
                  <ModalContentStatsContent key={index}>
                    {element.stat.name}
                      <ModalContentStatslineStyled color={element.base_stat}/>
                    {element.base_stat}
                  </ModalContentStatsContent>                   
                )
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
