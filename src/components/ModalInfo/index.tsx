import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { api } from "../../lib/axios";
import { ModalProps } from "./interface";
import {
  ImageStyled,
  ModalContentImageStyled,
  ModalContentInfoStyled,
  ModalContentStyled,
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
          <ModalContentInfoStyled></ModalContentInfoStyled>
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
