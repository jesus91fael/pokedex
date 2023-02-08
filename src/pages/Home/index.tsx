import React, { useCallback, useEffect, useState } from "react";
import ModalInfo from "../../components/ModalInfo";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { api } from "../../lib/axios";
import { ListCardsStyled, PageStyled } from "./styles";

const Home = () => {
  let NUMBER_POKEMONS = 18;

  const [pokemons, setPokemons] = useState<any[]>([]);
  const [pokemonsOffsetApi, setPokemonsOffsetApi] = useState(NUMBER_POKEMONS);

  const [show, setShow] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (item: any) => {
    setItemSelecionado(item);
    setShow(true);
  }
  // useEffect(() => {
  //   api
  //     .get(`/`)
  //     .then((response: any) => setPokemons(response.data.results))
  //     .catch((err: any) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  // }, [count, countInitial, pokemons]);

  // const handleMorePokemons = () =>{
  //   count = count + 20
  // }
  // ///

  const handlePokemonsListDefault = useCallback(async () => {
    const response = await api.get("/", {
      params: {
        limit: NUMBER_POKEMONS,
      },
    });
    setPokemons(response.data.results);
  }, [NUMBER_POKEMONS]);

  
const handleMorePokemons = useCallback(
  async (offset: any) => {
    const response = await api.get(`/`, {
      params: {
        offset,
        limit: NUMBER_POKEMONS,
      },
    });

    setPokemons(state => [...state, ...response.data.results]);
    setPokemonsOffsetApi(state => state + NUMBER_POKEMONS);
    console.log('pokemons', pokemons)
  },
  [NUMBER_POKEMONS, pokemons],
);

  

  useEffect(() => {
    handlePokemonsListDefault();
  }, [handlePokemonsListDefault]);

  return (
    <PageStyled>
      <Header />
      <ListCardsStyled>
        {pokemons.map((element: any, index: number) => {
          return (
            <>
              <span onClick={() => handleShow(element.name)}>
                <Card name={element.name} key={index} />
              </span>
              <ModalInfo
                isOpen={show}
                handleClose={handleClose}
                name={itemSelecionado}
              />
            </>
          );
        })}
      </ListCardsStyled>
      <button
        type="button"
        onClick={() => handleMorePokemons(pokemonsOffsetApi)}
      >
        CARREGAR MAIS
      </button>
    </PageStyled>
  );
};

export default Home;
